import { check, validationResult } from "express-validator";


export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: true,
      message: "Erro de validação",
      errors: errors.array(),
    });
  }
  next();
};

export const validateTutor = [
  check("nomeCompleto")
    .notEmpty()
    .withMessage("O nome completo é obrigatório")
    .isLength({ max: 100 })
    .withMessage("O nome deve ter no máximo 100 caracteres"),

  check("cpf")
    .notEmpty()
    .withMessage("O CPF é obrigatório")
    .matches(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/)
    .withMessage("O CPF deve estar no formato válido (com ou sem pontuação)"),

  check("telefone")
    .notEmpty()
    .withMessage("O telefone é obrigatório")
    .matches(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/)
    .withMessage("Telefone inválido"),

  check("email")
    .notEmpty()
    .withMessage("O e-mail é obrigatório")
    .isEmail()
    .withMessage("E-mail inválido"),

  check("cep")
    .notEmpty()
    .withMessage("O CEP é obrigatório")
    .matches(/^\d{5}-?\d{3}$/)
    .withMessage("CEP inválido"),

  check("endereco")
    .notEmpty()
    .withMessage("O endereço é obrigatório"),

  check("cidade")
    .notEmpty()
    .withMessage("A cidade é obrigatória"),

  validateRequest,
];
