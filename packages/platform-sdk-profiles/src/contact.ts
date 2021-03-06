import { ContactStruct } from "./contact.models";
import { Profile } from "./profile";
import { ContactAddressRepository } from "./repositories/contact-address-repository";

export class Contact {
	#profile: Profile;

	#id: string;
	#name: string;
	#addresses: ContactAddressRepository;
	#starred: boolean;

	public constructor({ id, name, starred }: ContactStruct, profile: Profile) {
		this.#profile = profile;

		this.#id = id;
		this.#name = name;
		this.#starred = starred;

		this.#addresses = new ContactAddressRepository(this.#profile);
	}

	public async restore(addresses: object[]): Promise<void> {
		await this.#addresses.fill(addresses);
	}

	public id(): string {
		return this.#id;
	}

	public name(): string {
		return this.#name;
	}

	public addresses(): ContactAddressRepository {
		return this.#addresses;
	}

	public isStarred(): boolean {
		return this.#starred;
	}

	public toggleStarred(): void {
		this.#starred = !this.isStarred();
	}

	public toObject(): ContactStruct {
		return {
			id: this.id(),
			name: this.name(),
			starred: this.isStarred(),
			addresses: this.addresses().toArray(),
		};
	}
}
