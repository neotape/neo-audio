interface OscillatorParams {
  type: string // type of sound wave
  frequency: number // sound frequency, default 440 ( middle A )
  detune: number // sound detune
  customized: boolean // if user customize there sound wave

}

class Oscillator<OscillatorParams> extends OscillatorNode{

}