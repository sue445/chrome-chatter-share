module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        'chrome-extension': {
            options: {
                name: "chrome-chatter-share",
                version: "1.0.3",
                id: "aehgkgapfagaljikampcebpacdcpkbfc",
                chrome: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
                clean: true,
                buildDir: 'build',
                resources: [
                    "css/**",
                    "fonts/**",
                    "img/**",
                    "lib/**",
                    "src/**",
                    "*.html",
                    "LICENSE",
                    "manifest.json",
                    "README.md"
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-chrome-compile');

    grunt.registerTask('default', ["chrome-extension"]);
};