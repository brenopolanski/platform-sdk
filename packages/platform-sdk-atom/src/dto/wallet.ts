import { Contracts, DTO, Exceptions } from "@arkecosystem/platform-sdk";
import { BigNumber } from "@arkecosystem/platform-sdk-support";

export class WalletData extends DTO.AbstractWalletData implements Contracts.WalletData {
	public address(): string {
		return this.data.address;
	}

	public publicKey(): string | undefined {
		return this.data.public_key.value;
	}

	public balance(): BigNumber {
		return BigNumber.make(this.data.coins[0].amount.replace(/\D/g, ""));
	}

	public nonce(): BigNumber {
		return BigNumber.make(this.data.sequence);
	}

	public username(): string | undefined {
		throw new Exceptions.NotImplemented(this.constructor.name, "username");
	}

	public rank(): number | undefined {
		throw new Exceptions.NotImplemented(this.constructor.name, "rank");
	}

	public votes(): BigNumber | undefined {
		throw new Exceptions.NotImplemented(this.constructor.name, "votes");
	}

	public isDelegate(): boolean {
		throw new Exceptions.NotImplemented(this.constructor.name, "isDelegate");
	}

	public isKnown(): boolean {
		throw new Exceptions.NotImplemented(this.constructor.name, "isKnown");
	}

	public isMultiSignature(): boolean {
		throw new Exceptions.NotImplemented(this.constructor.name, "isMultiSignature");
	}

	public isSecondSignature(): boolean {
		throw new Exceptions.NotImplemented(this.constructor.name, "isSecondSignature");
	}
}
