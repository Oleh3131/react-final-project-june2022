import Joi from "joi";

const movieValidator = Joi.object({

    titleName: Joi.string().regex(/^[a-zA-ZА-яёЁіІїЇґҐєЄ]{1,20}$/).required().messages({
        "string.pattern.base": "Only letters, minimum 1 maximum 20!"
    })
});

export{
    movieValidator
}