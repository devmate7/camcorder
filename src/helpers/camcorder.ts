export default class Camcorder extends MediaRecorder {
	constructor(
		public source: MediaStream,
		public target: WritableStream
	) {
		super(source, {
			audioBitsPerSecond: 16 * 2 * 44100,
			videoBitsPerSecond: 2500000
		});

		const writer = target.getWriter();

		source
			.getTracks()
			.forEach(track => track.addEventListener('ended', () => this.stop()));

		this.addEventListener(
			'dataavailable',
			({ data }) => data.size > 0 && writer.write(data)
		);
		this.addEventListener('stop', () => writer.close());
	}

	static async init() {
		const handler = await window.showSaveFilePicker({
			suggestedName: 'video',
			types: [{ accept: { 'video/webm': '.webm' } }]
		});
		const target = await handler.createWritable();
		const source = await navigator.mediaDevices.getDisplayMedia({
			audio: {
				channelCount: 2,
				sampleRate: 44100
			},
			video: {
				frameRate: 60
			}
		});

		return new this(source, target);
	}
}
