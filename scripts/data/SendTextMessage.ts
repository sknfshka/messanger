import {Message} from '../Store/State';
import {getMessagesRef} from './getMessagesRef';
import {User} from 'firebase/app';
import {StateCurrentChat} from '../Store/State';

function SendTextMessage( currentChat: StateCurrentChat, text: string, user: User | null ): void
{
	const mesRef = getMessagesRef( currentChat.id );
	
	if ( !mesRef || !user || !currentChat )
	{
		return;
	}

	var currentdate = new Date(); 
	var datetime = "" + /*currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " "  */
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

				

	mesRef.push()
		.set(
			{
				text,
				timestamp: datetime,
				fromUser: {
					uid: user.uid,
					photoURL: user.email,
					name: user.displayName,
				},
			} as Partial<Message>,
		);
}

export {
	SendTextMessage as default,
	SendTextMessage
};