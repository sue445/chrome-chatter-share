module.exports = function(grunt) {
    var manifest = grunt.file.readJSON("manifest.json");

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        'chrome-extension': {
            options: {
                name: "chrome-chatter-share",
                version: manifest.version,
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
        },
        gittag: {
            new_version: {
                options: {
                    tag: manifest.version,
                    message: "release v" + manifest.version
                }
            }
        },
        gitpush: {
            tag: {
                options: {
                    tags: true
                }
            },
            master: {
                options: {
                    branch: "master"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-chrome-compile');
    grunt.loadNpmTasks('grunt-git');

    grunt.registerTask('default', ["chrome-extension", "gittag:new_version", "gitpush:tag", "gitpush:master"]);
};
