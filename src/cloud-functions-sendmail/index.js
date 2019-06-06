slackPost = () => {
  var Slack = require('slack-node');

  var webhookUri =
    'https://hooks.slack.com/services/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';

  var slack = new Slack();
  slack.setWebhook(webhookUri);

  slack.webhook(
    {
      channel: '#contact-form',
      username: 'WebHook-bot',
      text:
        'New contact submission: \n' +
        'Name: ' +
        this.state.name +
        '\n' +
        'Email: ' +
        this.state.email +
        '\n' +
        'Phone: ' +
        this.state.phone +
        '\n' +
        'Message: ' +
        this.state.message,
    },
    function(err, response) {
      console.log(response);
    }
  );
};
