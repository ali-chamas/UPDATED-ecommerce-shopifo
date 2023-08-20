import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:"skL5mgf8MaMmDfYyKe9jRiTcwxfHidIbr6IUe3rw8ltJdgEiPaOb93OJm4IV2Yj2afzjvjArCFTVedHjifmIPIyn8zcW640pirpLmTRydAF12pQyj6iq43mdSc6qQXpt6pinvw6FoVcx1w6nqOAknIRDOzxylkz6burbjdTrddOUS1rjjfpt"
})
