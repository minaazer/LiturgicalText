import { createDrawerNavigator } from '@react-navigation/drawer';
import Glorification from '../screens/glorification';
import Home from '../screens/home';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;