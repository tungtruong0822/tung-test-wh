import * as Autodesk from "@types/forge-viewer";

import { SensorListExtension, SensorListExtensionID } from './SensorListExtension.js';


Autodesk.Viewing.theExtensionManager.registerExtension(SensorListExtensionID, SensorListExtension);


export {
    SensorListExtensionID,
    SensorListExtension,

};