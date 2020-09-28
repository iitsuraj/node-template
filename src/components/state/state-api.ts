/**
 * Template file for API layer
 * Work In Progress
 * TODO : complete the files, remove this comment
 */

import app from 'src/app';
import ErrorHandler from 'src/helpers/error';
import controller from './state-controller';
import validator from './state-validator';
import express from 'express';
const router = app.getRouter();

router.get('/', controller.get);
/* POST response */
router.post('/', validator.request.create, controller.create, validator.response.create);

export default router;
