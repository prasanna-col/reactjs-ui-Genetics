import { Container } from '@material-ui/core'
import React from 'react'
import Medical from './Swabk/Medical'
import Hereditary from './Swabk/Hereditary'
import PatientConsent from './Swabk/PatientConsent'

function SwabK() {
  return (
    <Container maxWidth="xl" style={{marginTop: 20}}>
      {/* <h1>Swabkit</h1> */}
      <Medical/>
      <Hereditary/>

      <PatientConsent/>
    </Container>
  )
}

export default SwabK