# Navigate Widget For PhoneGap

Navigate to an address in Phonegap, using [PhoneGap Launch Navigator Plugin](https://github.com/dpa99c/phonegap-launch-navigator)

## Contributing

For more information on contributing to this repository visit
[Contributing to a GitHub repository](https://docs.mendix.com/howto6/Contributing+to+a+GitHub+repository)!

## Installation
Install this widget through the AppStore. This widget will not work out of the box with your Phonegap build. You will have to customize the build package. Follow [this tutorial](https://docs.mendix.com/refguide6/Customizing+PhoneGap+Build+packages) to download the PhoneGap build package. Once you have downloaded the zip-file, you will have to add the following two entries to your ``config.xml`` file.

```xml
  <plugin name="uk.co.workingedge.phonegap.plugin.launchnavigator" source="npm" version="2.9.11"/>
```

## Compatibility
The widget works in Mendix 6 and upwards.

## Offline
This widget works offline.

## Configuration

### Behavior

#### Element class selector

CSS Selector for the element that will be used for the onClick event. Make sure your element has a proper css class set in the Modeler AND is on the same level (this means putting the element, for example a button, in the same container as this widget).

#### Element name selector

Name Selector for the element that will be used for the onClick event. See 'Element class selector'. Note: The CSS class selector overrides the Name selector. If you want to use the Name selector, make sure the CSS Selector is empty.

#### Hide outside Phonegap

If the plugin is not present, or the app is not opened in a Phonegap application, you can hide the target element by setting this to ``true``.

### Data source

#### Address

The attribute on the dataview that holds the address. String, required.
