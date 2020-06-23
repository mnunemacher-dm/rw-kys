import { db } from 'src/lib/db'

export const confidenceLevels = () => {
  return db.confidenceLevel.findMany()
}

export const confidenceLevel = ({ id }) => {
  return db.confidenceLevel.findOne({
    where: { id },
  })
}

export const createConfidenceLevel = ({ input }) => {
  return db.confidenceLevel.create({
    data: input,
  })
}

export const updateConfidenceLevel = ({ id, input }) => {
  return db.confidenceLevel.update({
    data: input,
    where: { id },
  })
}

export const deleteConfidenceLevel = ({ id }) => {
  return db.confidenceLevel.delete({
    where: { id },
  })
}
