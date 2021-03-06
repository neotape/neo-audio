import NeoContext from 'neo-context';

interface OscillatorParams {
  type: string // type of sound wave
  frequency: number // sound frequency, default 440 ( middle A )
  detune?: number // sound detune
  customized?: boolean // if user customize there sound wave
  partials?: Array<number> // 波形的局部
  phase?: number // 相位
}

class Oscillator<OscillatorParams> {

  context: Promise<AudioContext | boolean> = NeoContext.initialize();
  oscillator = '';
  type = '';
  frequency = '';

  constructor(oscillatorParams: OscillatorParams) {

  }
}
