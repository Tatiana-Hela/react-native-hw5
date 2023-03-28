import { AppRegistry } from "react-native";

import App from "./App";
import { name as appName } from "./app.json";

const AppWithRedux = () => <App />;

AppRegistry.registerComponent(appName, () => AppWithRedux);
