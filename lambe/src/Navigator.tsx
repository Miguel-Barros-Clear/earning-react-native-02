import AddPhoto from './screens/AddPhoto';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';

const Tab = createBottomTabNavigator();
const SwitchStack = createStackNavigator();
const routeIcon = {
  Feed: 'home',
  AddPhoto: 'camera',
  Profile: 'person',
};
export default props => {
  const [isLogged, setIsLogged] = useState(false);
  const AuthOrProfile = () => (
    <SwitchStack.Navigator screenOptions={{headerShown: false}}>
      {isLogged ? (
        <SwitchStack.Screen name="Home" component={Profile} />
      ) : (
        <SwitchStack.Screen name="Auth" component={Register} />
      )}
    </SwitchStack.Navigator>
  );
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name={routeIcon[route.name]} size={size} color={color} />
          ),
        })}>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="AddPhoto" component={AddPhoto} />
        <Tab.Screen name="Profile" component={AuthOrProfile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};