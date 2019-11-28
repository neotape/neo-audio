/**
 * @author dogjujue
 * @file check the accessibility for web audio API for current device
 * */
export default function (): Promise<{ accessible: boolean, reason?: any }> {
  return new Promise((resolve, reject) => {
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext || null;
      if (window.AudioContext) {
        // web audio API supported
        resolve({
          accessible: true
        })
      } else {
        // web audio API is not supported
        reject({
          accessible: false
        })
      }
    } catch (e) {
      // error here, so web audio API is not supported
      reject({
        accessible: false,
        reason: e,
      })
    }
  })
}
