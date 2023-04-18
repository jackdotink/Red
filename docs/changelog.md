# Changelog

## Release 1.2.0

- Added [Ratelimit](1.2/Red#ratelimit) utility function
- Events no longer need to be defined, client methods return promises instead of yielding
- Single Call Optimization added, if an event is only called once in a frame, two bytes are saved

## Release 1.1.0

- Added warning when using undefined identifier on the client
- Added [Collection](1.1/Red#collection) utility function

## Release 1.0.0

- Initial Release