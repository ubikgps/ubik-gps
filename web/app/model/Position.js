

Ext.define('Traccar.model.Position', {
    extend: 'Ext.data.Model',
    identifier: 'negative',

    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'protocol',
        type: 'string'
    }, {
        name: 'deviceId',
        type: 'int'
    }, {
        name: 'serverTime',
        type: 'date',
        dateFormat: 'c'
    }, {
        name: 'deviceTime',
        type: 'date',
        dateFormat: 'c'
    }, {
        name: 'fixTime',
        type: 'date',
        dateFormat: 'c'
    }, {
        name: 'valid',
        type: 'boolean'
    }, {
        name: 'accuracy',
        type: 'float',
        convert: Traccar.AttributeFormatter.getConverter('accuracy')
    }, {
        name: 'latitude',
        type: 'float'
    }, {
        name: 'longitude',
        type: 'float'
    }, {
        name: 'altitude',
        type: 'float'
    }, {
        name: 'speed',
        type: 'float',
        convert: Traccar.AttributeFormatter.getConverter('speed')
    }, {
        name: 'course',
        type: 'float'
    }, {
        name: 'address',
        type: 'string'
    }, {
        name: 'attributes'
    }]
});
