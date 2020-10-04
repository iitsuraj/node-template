import app from 'src/app';
import ErrorHandler from 'src/helpers/error';
import controller from './user-controller';
import validator from './user-validator';
import express from 'express';
const router = app.getRouter();

/* GET All Data */
router.get('/', controller.get);

// Get All document/collection count
router.get('/count', controller.count);

// Findone by Id
router.get('/:id', controller.findOne);

// Create a State
router.post('/', validator.request.create, controller.create);

// Update a State
router.put('/:id', controller.update);

// Delete a State
router.delete('/:id', controller.delete);

export default router;
