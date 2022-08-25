import { MessageService } from "./message.service"

describe('MessageService', ()=>{
    let service: MessageService;

    beforeEach(()=>{
        service = new MessageService();
    })

    it('should add a message when add is called', ()=>{
        service.add('haha');
        expect(service.messages.length).toBe(1);
    })

    it('should have no message left', ()=>{
        service.clear();
        expect(service.messages.length).toBe(0);
    })
})