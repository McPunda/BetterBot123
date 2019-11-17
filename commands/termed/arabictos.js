module.exports = {
    name: 'arabtos',
    aliases: ['arabtos', 'alias2', 'alias3'],
    category: 'moderation',
    run: async (client, message, args) => {
        if(!message.member.roles.some(r=>['Owner', 'Superior.', 'Admin'].includes(r.name))) {return message.reply('Sorry, you don\'t have permissions to use this!');}
        message.delete().catch(()=>{});
        message.channel.send(`في " : " تفصل بين الايميل والباس وهاذي ماتكتبها
مثال :-
example@example.com:example123
        
اذا شريت حساب وطلع مو شغال لك ٤٥ دقيقة تسوي فيها تذكرة في سيرفرنا الي بالديسكورد .
        
كل الحسابات الي موجودة في موقعنا مو فل اكسس يعني مو مع الايميل الاساسي.
        
لما تشتري تذكر ان راعي الحساب يمكن يقدر يسحب الحساب فا غير الباس حق الحساب.
        
اذا شريت شي من موقعنا ورفعت نزاع في البايبال عشان تسترجع فلوسك بتنحط في القائمة السودة الى " Fortnite World ".
        
“Fortnite World” ترفض طلبات استرجاع الفلوس.
“Fortnite World” تعوض فقط للحسابات الي ما تشتغل.
        
الحسابات الي تكون في موقعنا “Fortnite World” مو دايماً تربط للكونسل، فقط بعض الحسابات.`,
        )}}