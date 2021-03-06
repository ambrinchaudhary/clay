"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = defaultParse;
exports.utils = exports.resolver = exports.handlers = exports.defaultHandlers = void 0;

var allHandlers = _interopRequireWildcard(require("./handlers"));

exports.handlers = allHandlers;

var _parse = _interopRequireDefault(require("./parse"));

var AllResolver = _interopRequireWildcard(require("./resolver"));

exports.resolver = AllResolver;

var utils = _interopRequireWildcard(require("./utils"));

exports.utils = utils;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
const defaultResolver = AllResolver.findExportedComponentDefinition;
const defaultHandlers = [allHandlers.propTypeHandler, allHandlers.contextTypeHandler, allHandlers.childContextTypeHandler, allHandlers.propTypeCompositionHandler, allHandlers.propDocBlockHandler, allHandlers.flowTypeHandler, allHandlers.defaultPropsHandler, allHandlers.componentDocblockHandler, allHandlers.displayNameHandler, allHandlers.componentMethodsHandler, allHandlers.componentMethodsJsDocHandler];
/**
 * See `lib/parse.js` for more information about the arguments. This function
 * simply sets default values for convenience.
 *
 * The default resolver looks for *exported* `React.createClass(def)` calls
 * and expected `def` to resolve to an object expression.
 *
 * The default `handlers` look for `propTypes` and `getDefaultProps` in the
 * provided object expression, and extract prop type information, prop
 * documentation (from docblocks), default prop values and component
 * documentation (from a docblock).
 */

exports.defaultHandlers = defaultHandlers;

function defaultParse(src, resolver, handlers, options = {}) {
  if (!resolver) {
    resolver = defaultResolver;
  }

  if (!handlers) {
    handlers = defaultHandlers;
  }

  return (0, _parse.default)(String(src), resolver, handlers, options);
}