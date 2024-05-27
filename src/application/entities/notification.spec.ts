import { Content } from "./content";
import { Notification } from "./notification";


describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Você recebeu uma notificação!'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  })

  it('should not be able to create a notification content with less than 5 characters and more than 240', () => {
    const content = new Content('Você recebeu uma notificação!');

    expect(content.value.length).toBeGreaterThan(5);
    expect(content.value.length).toBeLessThan(240);
  })
})
