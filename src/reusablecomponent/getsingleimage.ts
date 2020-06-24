export default (arg: string) => {
  const img = arg.split(',')[0]
  return `https://res.cloudinary.com/dyypxjmx9/image/upload/v1592830732/${img}`
}