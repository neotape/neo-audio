import {checkAccessibility} from 'helpers';

interface NeoInstanceProps {
  // TODO
}

class NeoContext<NeoInstanceProps> {
  supported: boolean;
  audioContext: AudioContext;
  context: Promise<AudioContext>;

  constructor(neoInstanceProps: NeoInstanceProps) {
    //  TODO 完成props
  }

  async initialize() {
    const {reason, accessible} = await checkAccessibility(); // 检查可用性
    if (accessible && !reason) {
      !this.audioContext && (this.audioContext = new AudioContext()); // 不存在才初始化
      this.context = Promise.resolve(this.audioContext);
      return this.audioContext;
    } else {
      return Promise.reject(false);
    }
  }
}

export default new NeoContext({});
