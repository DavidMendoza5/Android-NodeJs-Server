
const save = async (schema, data) => {
  try {
    const new_data = new schema(data)
    const data_created = await new_data.save()
    return data_created
  } catch(err) {
    throw new Error('Error al guardar en la base de datos')
  }
}

const getOne = async (schema, id) => {
  try {
    const data = schema.find({ _id:id })
    return data
  } catch(err) {
    throw new Error('Error al buscar en la base de datos')
  }
}

const updateData = async (schema, id, data) => {
  try {
    const dataUpdated = await schema.findOneAndUpdate({ _id:id }, data)
    return dataUpdated
  } catch(err) {
    throw new Error('Error al actualizar en la base de datos')
  }
}

const deleteData = async (schema, id) => {
  try {
    const data = await schema.findOneAndDelete({ _id:id })
    return data
  } catch(err) {
    throw new Error('Error al eliminar en la base de datos')
  }
}

module.exports = {
  save,
  getOne,
  updateData,
  deleteData
}