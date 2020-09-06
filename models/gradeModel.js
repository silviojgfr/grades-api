// Criamos uma função (arrow) que recebe com parâmetro o mongoose, cria o schema para a collection 'accounts',
// a partir desse schema, cria o modelo 'Account', retornando esse modelo.
export default (mongoose) => {
  const gradeSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    lastModified: {
      type: Date,
      required: true,
      default: Date.now,
    },
  });

  const Grade = mongoose.model('grades', gradeSchema, 'grades');

  return Grade;
};
