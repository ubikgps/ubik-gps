

Ext.define('Traccar.view.CustomTimeField', {
    extend: 'Ext.form.field.Time',
    xtype: 'customTimeField',

    constructor: function (config) {
        if (Traccar.app.getPreference('twelveHourFormat', false)) {
            config.format = Traccar.Style.timeFormat12;
        } else {
            config.format = Traccar.Style.timeFormat24;
        }
        this.callParent(arguments);
    }
});
