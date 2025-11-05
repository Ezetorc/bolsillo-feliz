import Joi from 'joi';
import 'dotenv/config';

const envValidation = Joi.object({
  PORT: Joi.number().default(3000),
  JWT_SECRET: Joi.string().required(),
  DATABASE_URL: Joi.string().uri().required(),
  DATABASE_USERNAME: Joi.string().uri().required(),
  DATABASE_PASSWORD: Joi.string().uri().required()
})


const { error, value: envVars } = envValidation.validate(process.env, {
  allowUnknown: true,
  abortEarly: false
  
})

if (error) {
  throw new Error(`Configuration error: ${error.message}`)
}

export const PORT: number = envVars.PORT
export const JWT_SECRET: string = envVars.JWT_SECRET
export const DATABASE_URL: string = envVars.DATABASE_URL
export const DATABASE_USERNAME:String = envVars.DATABASE_USERNAME
export const DATABASE_PASSWORD: String = envVars.DATABASE_PASSWORD





