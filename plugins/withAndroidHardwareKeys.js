const { withMainActivity } = require("@expo/config-plugins");

const EVENT_NAME = "LiturgicalHardwareKey";
const MARKER = "LiturgicalBooks hardware key bridge";
const HANDLED_KEY_CODES = [
  19, // KEYCODE_DPAD_UP
  20, // KEYCODE_DPAD_DOWN
  21, // KEYCODE_DPAD_LEFT
  22, // KEYCODE_DPAD_RIGHT
  23, // KEYCODE_DPAD_CENTER
  24, // KEYCODE_VOLUME_UP
  25, // KEYCODE_VOLUME_DOWN
  42, // KEYCODE_N
  44, // KEYCODE_P
  62, // KEYCODE_SPACE
  66, // KEYCODE_ENTER
  67, // KEYCODE_DEL / Backspace
  69, // KEYCODE_MINUS
  81, // KEYCODE_PLUS
  87, // KEYCODE_MEDIA_NEXT
  88, // KEYCODE_MEDIA_PREVIOUS
  92, // KEYCODE_PAGE_UP
  93, // KEYCODE_PAGE_DOWN
  160, // KEYCODE_NUMPAD_ENTER
];

function addKotlinImports(contents) {
  const imports = [
    "import android.view.KeyEvent",
    "import com.facebook.react.bridge.Arguments",
    "import com.facebook.react.modules.core.DeviceEventManagerModule",
  ];

  return imports.reduce((updated, importLine) => {
    if (updated.includes(importLine)) {
      return updated;
    }
    const packageMatch = updated.match(/^package\s+[^\n]+\n/m);
    if (packageMatch) {
      return updated.replace(packageMatch[0], `${packageMatch[0]}\n${importLine}\n`);
    }
    return `${importLine}\n${updated}`;
  }, contents);
}

function addJavaImports(contents) {
  const imports = [
    "import android.view.KeyEvent;",
    "import com.facebook.react.bridge.Arguments;",
    "import com.facebook.react.bridge.WritableMap;",
    "import com.facebook.react.modules.core.DeviceEventManagerModule;",
  ];

  return imports.reduce((updated, importLine) => {
    if (updated.includes(importLine)) {
      return updated;
    }
    const packageMatch = updated.match(/^package\s+[^;]+;\n/m);
    if (packageMatch) {
      return updated.replace(packageMatch[0], `${packageMatch[0]}\n${importLine}\n`);
    }
    return `${importLine}\n${updated}`;
  }, contents);
}

function insertBeforeLastBrace(contents, block) {
  const lastBraceIndex = contents.lastIndexOf("}");
  if (lastBraceIndex === -1) {
    throw new Error("Could not find MainActivity class closing brace.");
  }
  return `${contents.slice(0, lastBraceIndex)}\n${block}\n${contents.slice(lastBraceIndex)}`;
}

function patchKotlin(contents) {
  if (contents.includes(MARKER)) {
    return contents;
  }

  const keyCodes = HANDLED_KEY_CODES.join(", ");
  const block = `
  // ${MARKER}
  override fun dispatchKeyEvent(event: KeyEvent): Boolean {
    if (event.action == KeyEvent.ACTION_DOWN) {
      emitLiturgicalHardwareKey(event)
    }
    return super.dispatchKeyEvent(event)
  }

  private fun emitLiturgicalHardwareKey(event: KeyEvent): Boolean {
    val handledKeyCodes = setOf(${keyCodes})
    if (!handledKeyCodes.contains(event.keyCode) || event.repeatCount > 0) {
      return false
    }

    val reactContext = reactNativeHost.reactInstanceManager.currentReactContext ?: return false
    val params = Arguments.createMap().apply {
      putInt("keyCode", event.keyCode)
      putString("keyName", KeyEvent.keyCodeToString(event.keyCode))
      putInt("metaState", event.metaState)
    }

    reactContext
      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
      .emit("${EVENT_NAME}", params)
    return true
  }
`;

  return insertBeforeLastBrace(addKotlinImports(contents), block);
}

function patchJava(contents) {
  if (contents.includes(MARKER)) {
    return contents;
  }

  const keyCases = HANDLED_KEY_CODES.map((keyCode) => `      case ${keyCode}:`).join("\n");
  const block = `
  // ${MARKER}
  @Override
  public boolean dispatchKeyEvent(KeyEvent event) {
    if (event.getAction() == KeyEvent.ACTION_DOWN) {
      emitLiturgicalHardwareKey(event);
    }
    return super.dispatchKeyEvent(event);
  }

  private boolean emitLiturgicalHardwareKey(KeyEvent event) {
    if (event.getRepeatCount() > 0) {
      return false;
    }

    switch (event.getKeyCode()) {
${keyCases}
        break;
      default:
        return false;
    }

    com.facebook.react.bridge.ReactContext reactContext =
        getReactNativeHost().getReactInstanceManager().getCurrentReactContext();
    if (reactContext == null) {
      return false;
    }

    WritableMap params = Arguments.createMap();
    params.putInt("keyCode", event.getKeyCode());
    params.putString("keyName", KeyEvent.keyCodeToString(event.getKeyCode()));
    params.putInt("metaState", event.getMetaState());
    reactContext
        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
        .emit("${EVENT_NAME}", params);
    return true;
  }
`;

  return insertBeforeLastBrace(addJavaImports(contents), block);
}

module.exports = function withAndroidHardwareKeys(config) {
  return withMainActivity(config, (config) => {
    const language = config.modResults.language;
    if (language === "kt" || language === "kotlin") {
      config.modResults.contents = patchKotlin(config.modResults.contents);
      return config;
    }
    if (language === "java") {
      config.modResults.contents = patchJava(config.modResults.contents);
      return config;
    }

    throw new Error(`Unsupported MainActivity language for hardware key plugin: ${language}`);
  });
};
