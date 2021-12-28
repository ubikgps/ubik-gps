
Ext.define('Traccar.view.dialog.User', {
    extend: 'Traccar.view.dialog.BaseEdit',

    requires: [
        'Traccar.view.ClearableComboBox',
        'Traccar.view.dialog.UserController',
        'Traccar.view.UnescapedTextField'
    ],

    controller: 'user',
    title: Strings.settingsUser,

    items: {
        xtype: 'form',
        items: [{
            xtype: 'fieldset',
            title: Strings.sharedRequired,
            items: [{
                xtype: 'unescapedTextField',
                name: 'name',
                fieldLabel: Strings.sharedName
            }, {
                xtype: 'unescapedTextField',
                name: 'email',
                fieldLabel: Strings.userEmail,
                allowBlank: false
            }, {
                xtype: 'textfield',
                name: 'password',
                fieldLabel: Strings.userPassword,
                inputType: 'password',
                allowBlank: false
            }]
        }, {
            xtype: 'fieldset',
            title: Strings.sharedPreferences,
            collapsible: true,
            collapsed: true,
            items: [{
                xtype: 'unescapedTextField',
                name: 'phone',
                fieldLabel: Strings.sharedPhone
            }, {
                xtype: 'clearableComboBox',
                name: 'map',
                fieldLabel: Strings.mapLayer,
                store: 'MapTypes',
                displayField: 'name',
                valueField: 'key'
            }, {
                xtype: 'numberfield',
                reference: 'latitude',
                name: 'latitude',
                fieldLabel: Strings.positionLatitude,
                decimalPrecision: Traccar.Style.coordinatePrecision
            }, {
                xtype: 'numberfield',
                reference: 'longitude',
                name: 'longitude',
                fieldLabel: Strings.positionLongitude,
                decimalPrecision: Traccar.Style.coordinatePrecision
            }, {
                xtype: 'numberfield',
                reference: 'zoom',
                name: 'zoom',
                fieldLabel: Strings.serverZoom
            }, {
                xtype: 'checkboxfield',
                inputValue: true,
                uncheckedValue: false,
                name: 'twelveHourFormat',
                fieldLabel: Strings.settingsTwelveHourFormat
            }, {
                xtype: 'clearableComboBox',
                name: 'coordinateFormat',
                fieldLabel: Strings.settingsCoordinateFormat,
                store: 'CoordinateFormats',
                displayField: 'name',
                valueField: 'key'
            }, {
                xtype: 'unescapedTextField',
                name: 'poiLayer',
                fieldLabel: Strings.mapPoiLayer
            }]
        }, {
            xtype: 'fieldset',
            title: Strings.sharedPermissions,
            collapsible: true,
            collapsed: true,
            items: [{
                xtype: 'checkboxfield',
                inputValue: true,
                uncheckedValue: false,
                name: 'disabled',
                fieldLabel: Strings.sharedDisabled,
                disabled: true,
                reference: 'disabledField'
            }, {
                xtype: 'checkboxfield',
                inputValue: true,
                uncheckedValue: false,
                name: 'administrator',
                fieldLabel: Strings.userAdmin,
                disabled: true,
                reference: 'adminField'
            }, {
                xtype: 'checkboxfield',
                inputValue: true,
                uncheckedValue: false,
                name: 'readonly',
                fieldLabel: Strings.serverReadonly,
                disabled: true,
                reference: 'readonlyField'
            }, {
                xtype: 'checkboxfield',
                inputValue: true,
                uncheckedValue: false,
                name: 'deviceReadonly',
                fieldLabel: Strings.userDeviceReadonly,
                disabled: true,
                reference: 'deviceReadonlyField'
            }, {
                xtype: 'checkboxfield',
                inputValue: true,
                uncheckedValue: false,
                name: 'limitCommands',
                fieldLabel: Strings.userLimitCommands,
                disabled: true,
                reference: 'limitCommandsField'
            }, {
                xtype: 'datefield',
                name: 'expirationTime',
                fieldLabel: Strings.userExpirationTime,
                disabled: true,
                reference: 'expirationTimeField',
                startDay: Traccar.Style.weekStartDay,
                format: Traccar.Style.dateFormat
            }, {
                xtype: 'numberfield',
                name: 'deviceLimit',
                fieldLabel: Strings.userDeviceLimit,
                disabled: true,
                reference: 'deviceLimitField'
            }, {
                xtype: 'numberfield',
                name: 'userLimit',
                fieldLabel: Strings.userUserLimit,
                disabled: true,
                reference: 'userLimitField'
            }, {
                xtype: 'unescapedTextField',
                name: 'token',
                reference: 'tokenField',
                fieldLabel: Strings.userToken,
                triggers: {
                    generate: {
                        cls: 'iconCls: x-fa fa-refresh',
                        handler: 'generateToken'
                    }
                }
            }]
        }]
    },

    buttons: [{
        text: Strings.sharedAttributes,
        handler: 'showAttributesView'
    }, {
        glyph: 'xf041@FontAwesome',
        minWidth: 0,
        handler: 'getMapState',
        tooltip: Strings.sharedGetMapState,
        tooltipType: 'title'
    }, {
        glyph: 'xf003@FontAwesome',
        minWidth: 0,
        handler: 'testNotification',
        hidden: true,
        reference: 'testNotificationButton',
        tooltip: Strings.sharedTestNotification,
        tooltipType: 'title'
    }, {
        xtype: 'tbfill'
    }, {
        glyph: 'xf00c@FontAwesome',
        tooltip: Strings.sharedSave,
        tooltipType: 'title',
        minWidth: 0,
        handler: 'onSaveClick'
    }, {
        glyph: 'xf00d@FontAwesome',
        tooltip: Strings.sharedCancel,
        tooltipType: 'title',
        minWidth: 0,
        handler: 'closeView'
    }]
});
