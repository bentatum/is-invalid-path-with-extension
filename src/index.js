import { default as isValid } from 'is-valid-path'

export default (path = '', extensions) =>
    isValid(path) && path.match(extensions) && true
