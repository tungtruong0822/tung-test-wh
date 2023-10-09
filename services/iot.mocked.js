const SENSORS = {
    'sensor-1': {
        name: 'Floor',
        objectId:12
    },
    'sensor-2': {
        name: 'M_Concrete-Round-Column',
        objectId:12
    },
    'sensor-3': {
        name: 'M_Concrete-Rectangular Beam',
        objectId:12
    },
    'sensor-4': {
        name: 'Basic Wall',
        objectId:12
    },




};

const CHANNELS = {
    'temp': {
        name: 'Tổng khối lượng',
        type: 'double',
        unit: 'm3',
        min: 130,
        max: 2500
    },

};

async function getSensors() {
    return SENSORS;
}

async function getChannels() {
    return CHANNELS;
}

async function getSamples(timerange, resolution = 32) {
    return {
        count: resolution,
        timestamps: generateTimestamps(timerange.start, timerange.end, resolution),
        data: {
            'sensor-1': {
                'temp': generateRandomValues(2100, 2500, resolution, 1.0),

            },
            'sensor-2': {
                'temp': generateRandomValues(900, 1100, resolution, 1.0),

            },
            'sensor-3': {
                'temp': generateRandomValues(900, 1200, resolution, 1.0),

            },
            'sensor-4': {
                'temp': generateRandomValues(130, 150, resolution, 1.0),

            },


        }
    };
}

function generateTimestamps(start, end, count) {
    const delta = Math.floor((end.getTime() - start.getTime()) / (count - 1));
    const timestamps = [];
    for (let i = 0; i < count; i++) {
        timestamps.push(new Date(start.getTime() + i * delta));
    }
    return timestamps;
}

function generateRandomValues(min, max, count, maxDelta) {
    const values = [];
    let lastValue = min + Math.random() * (max - min);
    for (let i = 0; i < count; i++) {
        values.push(lastValue);
        lastValue += (Math.random() - 0.5) * 2.0 * maxDelta;
        if (lastValue > max) {
            lastValue = max;
        }
        if (lastValue < min) {
            lastValue = min;
        }
    }
    return values;
}

module.exports = {
    getSensors,
    getChannels,
    getSamples
};
