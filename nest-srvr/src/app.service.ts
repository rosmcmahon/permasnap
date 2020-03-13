import { Injectable } from '@nestjs/common'
import { ClientDelegatedTxnDto } from './types/dto'
import log from './utils/logger'
import { ArweaveProvider } from './arweave.provider'

@Injectable()
export class AppService {
	constructor(private readonly arweaveProvider: ArweaveProvider) {}
	async delegatedPost(delegated_post_data: ClientDelegatedTxnDto): Promise<void> {
		log.log(delegated_post_data)
		/** Step 1 Check if the hash already exists on arweave */
		
		/** Step 2 Validate the payload */

		/** Step 3 Post to Arweave */
	}
}
