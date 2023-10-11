import { DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';

function RightDrawerContent(props) {
  const { state, navigation } = props;

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} 
        onItemPress={({ route, focused }) => {
          if (!focused) {  // Only run the logic if the drawer item isn't already focused
            if (route.name.startsWith("Section-")) {
              const index = parseInt(route.name.split('-')[1], 10);
              navigation.navigate("MainContent", { pageIndex: index });
            } else {
              navigation.navigate(route.name);
            }
          }
        }} 
      />
    </DrawerContentScrollView>
  );
}

export default RightDrawerContent;
