import { check, validationResult } from "express-validator";

// Middleware para verificar os erros de validação
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

export const validatePet = [
  check("nomePet")
    .notEmpty()
    .withMessage("O nome do pet é obrigatório")
    .isLength({ max: 50 })
    .withMessage("O nome do pet deve ter no máximo 50 caracteres"),

  check("especie")
    .notEmpty()
    .withMessage("A espécie é obrigatória"),

  check("raca")
    .notEmpty()
    .withMessage("A raça é obrigatória"),

  check("sexo")
    .notEmpty()
    .withMessage("O sexo é obrigatório")
    .isIn(["Macho", "Fêmea"])
    .withMessage("Sexo deve ser 'Macho' ou 'Fêmea'"),

  check("porte")
    .notEmpty()
    .withMessage("O porte é obrigatório")
    .isIn(["Pequeno", "Médio", "Grande"])
    .withMessage("Porte deve ser 'Pequeno', 'Médio' ou 'Grande'"),

  // Data de nascimento e observações são opcionais
  check("dataNascimento")
    .optional()
    .isISO8601()
    .withMessage("A data de nascimento deve ser uma data válida"),

  check("observacoes")
    .optional()
    .isLength({ max: 500 })
    .withMessage("Observações devem ter no máximo 500 caracteres"),

  validateRequest,
];
