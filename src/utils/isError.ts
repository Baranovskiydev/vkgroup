export const isError = (value: unknown): value is Error =>{
    return !!value && typeof value === 'object' &&
      'message' in value && typeof value.message === 'string' &&
      'stack' in value && typeof value.stack === 'string'
  }