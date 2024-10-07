module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    testMatch: ['**/src/**/*.(test|spec).js'],
    moduleFileExtensions: ['js', 'json', 'node'],
};
