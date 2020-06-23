import { db } from 'src/lib/db'

export const tools = () => {
  return db.tool.findMany()
}

export const tool = ({ id }) => {
  return db.tool.findOne({
    where: { id },
  })
}

export const createTool = ({ input }) => {
  return db.tool.create({
    data: input,
  })
}

export const searchTools = ({ term }) => {
  return db.tool.findMany({
    where: {
      name: { contains: term },
    },
  })
}

export const updateTool = ({ id, input }) => {
  return db.tool.update({
    data: input,
    where: { id },
  })
}

export const deleteTool = ({ id }) => {
  return db.tool.delete({
    where: { id },
  })
}
