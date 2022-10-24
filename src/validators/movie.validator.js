import Joi from "joi";

const movieValidator = Joi.object({

    titleName: Joi.string().regex(/^[a-zA-ZА-яёЁіІїЇґҐєЄ\s]{1,40}$/).required().messages({
        "string.pattern.base": "Only letters, minimum 1 maximum 40!"
    })
});

export{
    movieValidator
}