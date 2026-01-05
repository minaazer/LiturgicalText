Holy Week JSON structure (data/jsons/holyWeek.json)
- Root: array of services.
- Service: array of exactly 2 strings: [english title, arabic title] (required).
- Hours: array of hour objects:
  - hour: array of exactly 2 strings [english title, arabic title] (required).
  - sections: array of section objects:
    - title (required).
    - tables (array, items are either table or placeholder):
      - Table (required: english_title, tbodies; optional: coptic_title, arabic_title, title, nonTraditionalPascha, explanation_button, image_button, caption_class):
        - tbodies: array, min 1.
        - rows: array, min 1, each row requires row-class and cells; optional nonTraditionalPascha, data-navigation (keys seen: screen, serviceName, hourName; rare: destination, source). Nested rows previously existed but are removed.
        - cells: array, min 1; each cell requires at least one language (english or arabic or coptic); optional englishLink, arabicLink.
      - Placeholder (repeated prayer): required repeated_prayer_title, source, category; optional repeated_prayer_variables (keys seen: hour, paschalPraise, noProstrations, nonTraditionalPascha, firstVerse, season, eshlil).
Data cleanup notes: prior `nonTraditionalPascha` section and nested rows were removed from the current JSON.

Psalmody JSON structure (data/jsons/psalmody/psalmody.json)
- Root: array of tables/placeholders.
- Uses common table placeholder base schema at `json-editor/schemas/common/table_base.schema.json` (psalmody schema ref-only).
- Table: required english_title, tbodies; optional coptic_title, arabic_title, caption_class, themes, seasons/excludedSeasons (string or array where present), placement (array), aktonkAki, explanation_button, image_button, title, nonTraditionalPascha, saints, service, table_class, dayOfTheWeek, weekdayWeekend, postFirstCanticleNonSunday, theotokiasIndex, defaultVisibility, category.
  - tbodies: min 1; rows: min 1; each row requires row-class and cells; optional data-navigation (destination, source).
  - cells: min 1; each cell requires at least one language (english or arabic or coptic); optional englishLink, arabicLink.
- Placeholder types:
  - repeated_prayer_title: required repeated_prayer_title, source, category; optional repeated_prayer_variables (season).
  - repeated_prayer_placement: required repeated_prayer_placement, source, category; optional passToTable (dayOfTheWeek).
  - link-only: required link (string; may be empty). May also carry passToTable (e.g., dayOfTheWeek as string or array) to be merged into linked tables.
- Seasonal praises variant: array of { category, tables }, where tables use the shared base table definition (same as above).
- Repeated prayers schemas (hwRepeatedPrayers, annualRepeatedPrayers, repeatedAgpeyaPrayers, seasonalRepeateadPrayers) follow the seasonal-praises shape (category + tables using base table definition). Others (actsResponses, aspasmosAdam/Wtos, distributionPraises, expositions, gospelResponses, intercessions, litanies, psalmResponses, versesOfCymbals) reference the shared base directly; endOfServiceParts and psalm150Refrains are pending special schemas.
- Shared row-class values (dropdown): Intro, Refrain, commentary, congregation, intro, navigationButton, navigationLink, north, priest, refrain, silent-prayer, south, text.
 - Repeated prayers base-ref: endOfServiceCanons also references the shared base.

Cell rules (shared base)
- Each cell requires at least one of: english | arabic | coptic | englishLink | arabicLink. englishLink/arabicLink alone is now valid for navigation cells.

Liturgy + Root files
- Liturgy folder schemas now reference the shared base (table_base) (aspasmoses, congregationResponses, deaconResponses, distribution, fractions, liturgyOfTheWord, liturgyOfTheFaithfull_Basil/Cyril/Gregory, offertory, reconciliations).
- Root table files (glorification, holyMatrimony, unctionOfTheSick) also reference the shared base.
- Agpeya, Bible, Readings, images.json, explanations.json: currently hidden from frontend; schemas pending until finalized.
