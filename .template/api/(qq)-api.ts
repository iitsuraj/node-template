/**
 * Template file for API layer
 * Work In Progress
 * TODO : complete the files, remove this comment
 */

import app from 'src/app';
import ErrorHandler from 'src/helpers/error';
import controller from './(qq)-controller';
import validator from './(qq)-validator';
const router = app.getRouter();

/**
 * @swagger
 * /(qq):
 *  get:
 *    description: Use to request all (qq)
 *    responses:
 *      '200':
 *        description: A successful response
 *       '401':
 *          description: Unauthorized - No valid API key provided.
 *        '402':
 *           description: Request Failed - The parameters were valid but the request failed.
 *        '403':
 *           description: Forbidden -	The API key doesn't have permissions to perform the request.
 *        '404'
 *            description:  Not Found	- The requested resource doesn't exist.
 *        '429'
 *            description:  Too Many Requests -	Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.
 *        '500,502,503,504'
 *            description: Server Errors	Something went wrong on Stripe's end. (These are rare.)
 *
 */

router.get('/', function (req, res, next) {
    res.send('(qq) component');
});
/* POST response */
router.post('/', validator.request.create, controller.create, validator.response.create);

module.exports = router;
