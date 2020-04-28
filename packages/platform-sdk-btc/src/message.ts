import { Contracts } from "@arkecosystem/platform-sdk";
import { ECPair } from "bitcoinjs-lib";
import bitcoinMessage from "bitcoinjs-message";

export class Message implements Contracts.Message {
	public sign(input): Contracts.SignedMessage {
		const keyPair = ECPair.fromWIF(input.wif);

		return {
			message: input.message,
			publicKey: keyPair.publicKey.toString("hex"),
			signature: bitcoinMessage.sign(input.message, keyPair.privateKey, keyPair.compressed).toString("hex"),
		};
	}

	public verify(input): boolean {
		return bitcoinMessage.verify(input.message, input.address, Buffer.from(input.signature, "hex"));
	}
}