const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "...",
  description: "goibot",
  commandCategory: "không cần dấu lệnh",
  usages: "noprefix",
  cooldowns: 0,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  var tl = ["Dạ nghe❤","Gọi bot,botcó mặt🌚 ","Yêu bot hongg mà gọi🥺","Ai vừa gọi tên em làm người yêu em nha 😘","Gọi tui có việc gì nói mau còn kiếm người yêu🤡","Đang bật 1111 kêu tên làm gì vậy 🌚 xem chung hongg","Đang ngủ nè hong cho ngủ à 😴"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "bot out")) {
    return api.sendMessage("Tạm biệt mng ><", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

   if ((event.body.toLowerCase() == "bot cút")) {
    return api.sendMessage("em đuổi anh đấy à, vậy thôi...anh sẽ cút cho em vừa lòng☺️", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "bot lon")) {
    return api.sendMessage("🔔Thành viên đã cố ý chửi bot, do đó đã vi phạm luật bot nên bot sẽ out và muốn add lại thì xin liên hệ qua admin qua Fb:  để được hỗ trợ\nLink fb nè: https://www.facebook.com/User.Lucifer.s", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "bot óc chó")) {
    return api.sendMessage("🔔Thành viên đã cố ý chửi bot, do đó đã vi phạm luật bot nên bot sẽ out và muốn add lại thì xin liên hệ qua admin qua Fb: BLACKBLACK để được hỗ trợ\nLink fb nè: https://www.facebook.com/User.Lucifer.s", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };
  
  if ((event.body.toLowerCase() == "bot chó") || (event.body.toLowerCase() == "bot chó")) {
    return api.sendMessage("ẳng ẳng, vừa lòng mày chưa 😔", threadID);
  };

  if ((event.body.toLowerCase() == "ôi") || (event.body.toLowerCase() == "oi")) {
    return api.sendMessage("ôi gì thế? cháy nhà hả em", threadID);
  };

  if ((event.body.toLowerCase() == "ối") || (event.body.toLowerCase() == "ối")) {
    return api.sendMessage("Ối gì thế? cháy nhà hả em", threadID);
  };

  if ((event.body.toLowerCase() == "ơi") || (event.body.toLowerCase() == "oi")) {
    return api.sendMessage("Ngoan đấy tặng cậu nụ hôn. Moaahh:>", threadID);
  };

  if ((event.body.toLowerCase() == "ừ") || (event.body.toLowerCase() == "u")) {
    return api.sendMessage("dạ đi cho lịch sự tí bae", threadID);
  };

  if ((event.body.toLowerCase() == "ừa") || (event.body.toLowerCase() == "ua")) {
    return api.sendMessage("dạ đi cho lịch sử tí bae", threadID);
  };

  if ((event.body.toLowerCase() == "uk") || (event.body.toLowerCase() == "uk")) {
    return api.sendMessage("dạ đi cho lịch sử tí bae", threadID);
  };

  if ((event.body.toLowerCase() == "dạ") || (event.body.toLowerCase() == "da")) {
    return api.sendMessage("Em ngoan đấy xứng đáng có được chủ bot của anh :>", threadID);
  };

  if ((event.body.toLowerCase() == "yêu") || (event.body.toLowerCase() == "yeu")) {
    return api.sendMessage("Yêu cc, tiền, xe, nhà thì đéo có mà yêu với đương, lo học hành và đi làm kiếm tiền đê yêu sau", threadID);
  };

  if ((event.body.toLowerCase() == "đmm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("sao lại chửi nhau thế kia, phải yêu thương nhau chứ", threadID);
  };

  if ((event.body.toLowerCase() == "đmm bot") || (event.body.toLowerCase() == "dmm bot")) {
    return api.sendMessage("sao em lại chửi bot🥺", threadID);
  };

  if ((event.body.toLowerCase() == "há há") || (event.body.toLowerCase() == "há há")) {
    return api.sendMessage("cười kiểu gì thế em :))", threadID);
  };

  if ((event.body.toLowerCase() == "cmm bot") || (event.body.toLowerCase() == "cmm bot")) {
    return api.sendMessage("bot có làm gì âu mà sao em lại chửi bot🥺", threadID);
  };

  if ((event.body.toLowerCase() == "địt") || (event.body.toLowerCase() == "dit")) {
    return api.sendMessage("nói chuyện văn minh tý đê em ơiiii :)", threadID);
  };

  if ((event.body.toLowerCase() == "uk") || (event.body.toLowerCase() == "uk")) {
    return api.sendMessage("okkk", threadID);
  };

  if ((event.body.toLowerCase() == ":))") || (event.body.toLowerCase() == ":))")) {
    return api.sendMessage(":Đ", threadID);
  };

  if ((event.body.toLowerCase() == "=))") || (event.body.toLowerCase() == "=))")) {
    return api.sendMessage(": )", threadID);
  };

  if ((event.body.toLowerCase() == "._.") || (event.body.toLowerCase() == "._.")) {
    return api.sendMessage("(￣▽￣)", threadID);
  };

  if ((event.body.toLowerCase() == ";-;") || (event.body.toLowerCase() == ";-;")) {
    return api.sendMessage(".--.", threadID);
  };

  if ((event.body.toLowerCase() == "=)))") || (event.body.toLowerCase() == "=)))")) {
    return api.sendMessage("(￣^￣)", threadID);
  };

  if ((event.body.toLowerCase() == "bot ơi") ||  (event.body.toLowerCase() == "bot ơi")) {
    return api.sendMessage("Anh bận lắm có gì ib admin anh đi :3", threadID);
  };

  if ((event.body.toLowerCase() == "yêu bot") || (event.body.toLowerCase() == "yeu bot")) {
    return api.sendMessage("Hmm... Bot ngại lắm bot cũng yêu em moazzzz :3", threadID);
  };

   if ((event.body.toLowerCase() == "yêu anh") || (event.body.toLowerCase() == "yeu anh")) {
    return api.sendMessage("Anh cũng yêu em <3", threadID);
  };

  if ((event.body.toLowerCase() == "chào cậu") || (event.body.toLowerCase() == "chao cau")) {
    return api.sendMessage("Hí chào em 💙", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cc") || (event.body.toLowerCase() == "chui cc")) {
    return api.sendMessage("️Lo mà học đi em chửi gì tầm này :)", threadID);
  };

  if ((event.body.toLowerCase() == "hentai") || (event.body.toLowerCase() == "hentai")) {
    return api.sendMessage("Hả 😋, anh thích coi lắm", threadID);
  };

  if ((event.body.toLowerCase() == "cc cút") || (event.body.toLowerCase() == "cc cút")) {
    return api.sendMessage("em đuổi anh cút 🥺?", threadID);
  };

  if ((event.body.toLowerCase() == "vãi") || (event.body.toLowerCase() == "vai")) {
    return api.sendMessage("vãi, nhãn, nho, chôm chôm gì ở đây thế em", threadID);
  };

  if ((event.body.toLowerCase() == "link") || (event.body.toLowerCase() == "link")) {
    return api.sendMessage("Link bao nhiêu phút á cho a xem với nào 🤤", threadID);
  };

  if ((event.body.toLowerCase() == "cứu") || (event.body.toLowerCase() == "cuu")) {
    return api.sendMessage("Cúu cc ngu thì chết khôn thì sống cô chủ bảo tao thế <3", threadID);
  };

  if ((event.body.toLowerCase() == ":<") || (event.body.toLowerCase() == ":<")) {
    return api.sendMessage(":>", threadID);
  };

  if ((event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "....")) {
    return api.sendMessage("hmmmmm...hmmmm.hmmmm", threadID);
  };

  if ((event.body.toLowerCase() == "MàiMài") || (event.body.toLowerCase() == "Mài")) {
    return api.sendMessage("🐳Sao? Nhắc Tên Chủ Tao Có Việc Gì ?🐸","Ai Nhắc Tên Chủ Tao Á 🐸", "Chủ Tao Là Số 1 OK 🍀💗", threadID);
  };

  if ((event.body.toLowerCase() == "kaka") || (event.body.toLowerCase() == "kakaaa")) {
    return api.sendMessage("cười kiểu gì đấy em -.-", threadID);
  };  

  if ((event.body.toLowerCase() == "hát đi mng") || (event.body.toLowerCase() == "hat di mng")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi") || (event.body.toLowerCase() == "hat di")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };  

  if ((event.body.toLowerCase() == "-.-") || (event.body.toLowerCase() == "-.-")) {
    return api.sendMessage(":>", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi nào") || (event.body.toLowerCase() == "hát đi nào")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi bot") || (event.body.toLowerCase() == "hat di bot")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "vcl") || (event.body.toLowerCase() == "vcl")) {
    return api.sendMessage("️sủa cc gì đấy thằng nhóc :>", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi nào mng") || (event.body.toLowerCase() == "tt di nao mng")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick, 3 là ăn đấm, 4 là ăng nhăng nhăng nhăng :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt mng ơi") || (event.body.toLowerCase() == "tt mng oi")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick, 3 là ăn đấm, 4 là ăng nhăng nhăng nhăng :))))", threadID);
  };

  if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
    return api.sendMessage("️Ngủ ngon 💙 Chúc mọi người mơ siêu đẹp 💙", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai v bot") || (event.body.toLowerCase() == "admin m la ai v bot")) {
    return api.sendMessage("️Admin tớ tên Granger có gì dùng lệnh ?adbot admin để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai vậy bot") || (event.body.toLowerCase() == "admin m la ai vậy bot")) {
    return api.sendMessage("️Admin tớ Tên Granger có gì dùng lệnh ?adbot admin để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mn") || (event.body.toLowerCase() == "tt đi mn")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick, 3 là ăn đấm, 4 là ăng nhăng nhăng nhăng :))))", threadID);
  };

  if ((event.body.toLowerCase() == "flop quá") || (event.body.toLowerCase() == "flop qua")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick, 3 là ăn đấm, 4 là ăng nhăng nhăng nhăng :))))", threadID);
  };

  if ((event.body.toLowerCase() == "🐸🚬") || (event.body.toLowerCase() == "🐸🚬")) {
    return api.sendMessage("️ộp ộp 🚬🐸", threadID);
  };

  if ((event.body.toLowerCase() == "🚬🐸") || (event.body.toLowerCase() == "🚬🐸")) {
    return api.sendMessage("️ộp ộp 🚬🐸", threadID);
  };

  if ((event.body.toLowerCase() == "🐸") || (event.body.toLowerCase() == "🐸")) {
    return api.sendMessage("️ộp ộp 🚬🐸", threadID);
  };

  if ((event.body.toLowerCase() == "con cac") || (event.body.toLowerCase() == "con cac")) {
    return api.sendMessage("️tục quá cậu", threadID);
  };

  if ((event.body.toLowerCase() == "cai lon") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️tục quá cậu", threadID);
  };

  if ((event.body.toLowerCase() == "clozz") || (event.body.toLowerCase() == "clozz")) {
    return api.sendMessage("️tục quá cậu :<", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
    return api.sendMessage("️em chửi anh đấy à? anh dỗi đấy", threadID);
  };

  if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
    return api.sendMessage("️sao em lại chửi anh :<", threadID);
  };

  if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
    return api.sendMessage("️sao em lại chửi anh:<", threadID);
  };

  if ((event.body.toLowerCase() == "cặc") || (event.body.toLowerCase() == "cặc")) {
    return api.sendMessage("️văn minh lên tí đi cậu, tớ hong thích tục tiễu", threadID);
  };

  if ((event.body.toLowerCase() == "@Guision") || (event.body.toLowerCase() == "@Guision")) {
    return api.sendMessage("️cậu tag admin tớ có việc gì hong :>","admin tớ bận rồi ạ :3","admim tớ ngủ rồi đừng tag nữa","Dzạ admin bot bận rồi có bot đây được hemm :>",threadID);
  };

  if ((event.body.toLowerCase() == "Mài") || (event.body.toLowerCase() == "MàiMài")) {
    return api.sendMessage("I only fight for myself, no one else.", threadID);
  };

  if ((event.body.toLowerCase() == "Ê") || (event.body.toLowerCase() == "ê")) {
    return api.sendMessage("️anh đây, có việc gì không em", threadID);
  };

  if ((event.body.toLowerCase() == "êyy") || (event.body.toLowerCase() == "eyyy")) {
    return api.sendMessage("️anh đây, có việc gì không em", threadID);
  };

  if ((event.body.toLowerCase() == "bot dthw quá") || (event.body.toLowerCase() == "bot dthw qua")) {
    return api.sendMessage("️ quá khen hihi :>", threadID);
  };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "haha")) {
    return api.sendMessage("️dui quá haha (￣^￣)", threadID);
  };

  if ((event.body.toLowerCase() == "kkk") || (event.body.toLowerCase() == "kkk")) {
    return api.sendMessage("️dui quá kkk (￣▽￣)", threadID);
  };

  if ((event.body.toLowerCase() == "con cặc") || (event.body.toLowerCase() == "con cặc")) {
    return api.sendMessage("️cậu tục tiễu quá nha", threadID);
  };

  if ((event.body.toLowerCase() == "cái lồn") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️cậu tục tiễu quá", threadID);
  };

  if ((event.body.toLowerCase() == "lồn") || (event.body.toLowerCase() == "lồn")) {
    return api.sendMessage("️cậu tục tiễu quá", threadID);
  };

  if ((event.body.toLowerCase() == "đm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("️văn minh lên đi cậu ơi", threadID);
  };

  if ((event.body.toLowerCase() == "đm bot") || (event.body.toLowerCase() == "dm bot")) {
    return api.sendMessage("️sao em lại chửi anh:< anh có làm cái gì âu", threadID);
  };

  if ((event.body.toLowerCase() == "lozz") || (event.body.toLowerCase() == "lozz")) {
    return api.sendMessage("️tục tiễu quá cậu", threadID);
  };

  if ((event.body.toLowerCase() == "clmm") || (event.body.toLowerCase() == "clmm")) {
    return api.sendMessage("️đừng chửi thề nữa cậu, văn minh lên đi:>", threadID);
  };

  if ((event.body.toLowerCase() == "ko ai thương t hết") || (event.body.toLowerCase() == "ko ai thuong t het")) {
    return api.sendMessage("️Thôi ngoan nào bot thương em mà 💙 ", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu em không") || (event.body.toLowerCase() == "bot yeu em khong")) {
    return api.sendMessage("Hi, không nka", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu admin bot không") || (event.body.toLowerCase() == "bot co yeu admin bot khong")) {
    return api.sendMessage("Có, yêu admin ấy nhất đừng hòng cướp của anh", threadID);
  };

  if ((event.body.toLowerCase() == "bot có người yêu chưa") || (event.body.toLowerCase() == "bot co nguoi yeu chua")) {
    return api.sendMessage("Rồi, là admin đấy <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot im đi") || (event.body.toLowerCase() == "bot im di")) {
    return api.sendMessage("Sao em bắt anh im :<", threadID);
  };

  if ((event.body.toLowerCase() == "bot cút đi") || (event.body.toLowerCase() == "bot cut di")) {
    return api.sendMessage("sao em lại đuổi anh :<", threadID);
  };

  if ((event.body.toLowerCase() == "bot chửi cái lon gì") || (event.body.toLowerCase() == "bot chui cai lon gi")) {
    return api.sendMessage("Chửi mày đấy, nhục vãi hahaha :>>, còn hỏi", threadID);
  };

  if ((event.body.toLowerCase() == "bot có buồn ko") || (event.body.toLowerCase() == "bot co buon ko")) {
    return api.sendMessage("Có mọi người sao anh buồn đc 💙 yêu lắm 💙", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu t ko") || (event.body.toLowerCase() == "bot co yeu t ko")) {
    return api.sendMessage("có yêu em và mọi người nhiều lắm", threadID);
  };

  if ((event.body.toLowerCase() == "bot đi ngủ đi") || (event.body.toLowerCase() == "bot di ngu di")) {
    return api.sendMessage("Anh là bot, em là người nên cần đi ngủ nè 💙", threadID);
  };

  if ((event.body.toLowerCase() == "bot ăn cơm chưa") || (event.body.toLowerCase() == "bot an com chua")) {
    return api.sendMessage("Anh nhìn em ăn là thấy no rồi 💙", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương tui ko") || (event.body.toLowerCase() == "bot co thuong tui ko")) {
    return api.sendMessage("Có 💙", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương t ko") || (event.body.toLowerCase() == "bot co thuong t ko")) {
    return api.sendMessage("Có 💙", threadID);
  };

  if ((event.body.toLowerCase() == "Sủa lẹ") || (event.body.toLowerCase() == "sủa lẹ")) {
    return api.sendMessage("Lớn hết rồi văn minh tý đi cậu êyyyyy", threadID);
  };

  if ((event.body.toLowerCase() == "bot làm thơ đi") ||  (event.body.toLowerCase() == "bot lam tho di")) {
    return api.sendMessage("Yêu cậu như một cực hình\nNhấp lên nhấp xuống hai mình cùng rên", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot lon") ||  (event.body.toLowerCase() == "clmm bot lon")) {
    return api.sendMessage("bạn chửi gì đấy nói rõ lên mình nghe lại xem nào :))", threadID);
  };

  if ((event.body.toLowerCase() == "cc") ||  (event.body.toLowerCase() == "cc")) {
    return api.sendMessage("gì cơ? Ai là cục cưng của cậu vậy:>", threadID);
  };

  if ((event.body.toLowerCase() == "bot yêu em không") ||  (event.body.toLowerCase() == "bot yeu em khong")) {
    return api.sendMessage("Bot không biết yêu hãy yêu admin Bot :>", threadID);
  };

  if ((event.body.toLowerCase() == "bot yêu em khum") ||  (event.body.toLowerCase() == "bot yêu em ko")) {
    return api.sendMessage("Bot không biết yêu hãy yêu admin Bot :>", threadID);
  };

  if ((event.body.toLowerCase() == "bot yêu em k") ||  (event.body.toLowerCase() == "bot yeu em k")) {
    return api.sendMessage("Bot không biết yêu hãy yêu admin Bot :>", threadID);
  };

  if ((event.body.toLowerCase() == "bot iu em k") ||  (event.body.toLowerCase() == "bot iu em ko")) {
    return api.sendMessage("Bot không biết yêu hãy yêu admin Bot :>", threadID);
  };

  if ((event.body.toLowerCase() == "bot iu bé khum") ||  (event.body.toLowerCase() == "bot iu bé không")) {
    return api.sendMessage("Bot không biết yêu hãy yêu admin Bot :>", threadID);
  };

  if ((event.body.toLowerCase() == "bot iu bé k") ||  (event.body.toLowerCase() == "bot iu bé ko")) {
    return api.sendMessage("Bot không biết yêu hãy yêu admin Bot :>", threadID);
  };

  if ((event.body.toLowerCase() == "ny admin bot là ai vậy") || (event.body.toLowerCase() == "ny admin bot la ai vay")) {
    return api.sendMessage("là chị Nhii cute nhất hệ mặt trời uwu", threadID);
  };
  
    if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hi")) {
    return api.sendMessage("Hi chào cậu! chúc bạn ️một ngày mới tuyệt vời. Luôn mỉm cười bạn nhé ❤", threadID);
  };
  
  if ((event.body.toLowerCase() == "2") || (event.body.toLowerCase() == "2")) {
    return api.sendMessage("Hi chào cậu! chúc bạn ️một ngày mới tuyệt vời. Luôn mỉm cười bạn nhé ❤", threadID);
  };
  
  if ((event.body.toLowerCase() == "chao") || (event.body.toLowerCase() == "chao")) {
    return api.sendMessage("Hi chào cậu! chúc bạn ️một ngày mới tuyệt vời. Luôn mỉm cười bạn nhé ❤", threadID);
  };

  if ((event.body.toLowerCase() == "bot ngu")) {
    return api.sendMessage("tự nhiên chửi tớ vậy hmmmm", threadID);
  };

  if ((event.body.toLowerCase() == "bot out")) {
    return api.sendMessage("hicc bạn phải chủ tớ đâu mà kêu tớ out", threadID);
  };

   if ((event.body.toLowerCase() == "bot cút")) {
    return api.sendMessage("không bé ơi cậu chủ bảo tớ canh cậu đấy cẩn thận", threadID);
  };

  if ((event.body.toLowerCase() == "bot lon")) {
    return api.sendMessage("chửi ít thôi tớ có chửi bạn câu nào không mà bạn chửi tớ hả, láo md.....", threadID);
  };

  if ((event.body.toLowerCase() == "😂")) {
    return api.sendMessage("cái mồn cười to thế, hôn miếng bây giờ hihi", threadID);
  };
  
if ((event.body.toLowerCase() == "tồi")) {
    return api.sendMessage("hảo hán vậy má ,má tồi ỉa khác gì ??", threadID);
  };
  
  if ((event.body.toLowerCase() == "bot óc chó")) {
    return api.sendMessage("làm thao óc chỗ nào bot thông minh lắm nhé", threadID);
  };

if ((event.body.toLowerCase() == "dm quân")) {
    return api.sendMessage("bot mách admin", threadID);
  };
  
if ((event.body.toLowerCase() == "hảo")) {
    return api.sendMessage("à ý là hảo hảo chua cay ý hả, mua hộ admin túi mì ăn đi hihi", threadID);
  };
  
  if ((event.body.toLowerCase() == "bot chó") || (event.body.toLowerCase() == "bot chó")) {
    return api.sendMessage("nữa lại chửi nữa rồi người gì mà kì cục", threadID);
  };

if ((event.body.toLowerCase() == "hí hí") ||  (event.body.toLowerCase() == "hihi")) {
    return api.sendMessage("hihi trời xanh mây trắng nay cậu cute vậy", threadID);
  };

  if ((event.body.toLowerCase() == "ukm") ||  (event.body.toLowerCase() == "ukm")) {
    return api.sendMessage("ukm chi cắn cho cái bây giờ", threadID);
  };

if ((event.body.toLowerCase() == ":))") ||  (event.body.toLowerCase() == ":)))")) {
    return api.sendMessage("bỏ cái icon đó đi, sao cậu không yêu tớ thay vì thả icon đó", threadID);
  };
  
if ((event.body.toLowerCase() == "🥲") ||  (event.body.toLowerCase() == "😞")) {
    return api.sendMessage("Icon dễ thương ha, tặng cậu cái bcs sài cho dui nè :33 ", threadID);
  };

if ((event.body.toLowerCase() == "cút") ||  (event.body.toLowerCase() == "cút đi")) {
    return api.sendMessage("cậu có biết cậu nói cút ngt sẽ tổn thương lắm không hả đồ tồi", threadID);
  };

  if ((event.body.toLowerCase() == "buồn") ||  (event.body.toLowerCase() == "chán")) {
    return api.sendMessage("thôi ngoan k buồn nữa về đây bot yêu thương nè moadhhhh ❤️", threadID);
  };
  
if ((event.body.toLowerCase() == "😑") ||  (event.body.toLowerCase() == "🙄")) {
    return api.sendMessage("Bỏ icon đó đi bạn bạn ê 🤔. chủ tớ bảo cậu dùng icon ❤️ này sẽ đáng yêu hơn đó hihih", threadID);
  };
  
if ((event.body.toLowerCase() == "quê @") ||  (event.body.toLowerCase() == "quê")) {
    return api.sendMessage("ôi con sông quê🥲 bạn thật là quê mùa 🥲", threadID);
  };

if ((event.body.toLowerCase() == "vg") ||  (event.body.toLowerCase() == "vâg")) {
    return api.sendMessage("hí hí bot chào cậu nha,nay cậu ngoan rồi đấy, chứ hôm bữa hư quá", threadID);
  };
  
  if ((event.body.toLowerCase() == "ôi") || (event.body.toLowerCase() == "ôi")) {
    return api.sendMessage("Ôi gì á đá, nhét quả táo vào mồm bây giờ ôi vs chả ối", threadID);
  };

  if ((event.body.toLowerCase() == "dỗi") || (event.body.toLowerCase() == "boss dỗi")) {
    return api.sendMessage("Bé ơi ngoan nào không dỗi nữa ngoan bae thương nà moadhhhh~~~~~♥️", threadID);
  };

  if ((event.body.toLowerCase() == "boss ơi") || (event.body.toLowerCase() == "boss")) {
    return api.sendMessage(" Boss cute phô mai con bò cười hế hế xứng đáng có 100 Ny:<", threadID);
  };

  if ((event.body.toLowerCase() == "bsvv") || (event.body.toLowerCase() == "bsvv mn")) {
    return api.sendMessage("Bạn cũng thế nhé...ngày mới tốt lành ^^", threadID);
  };

  if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == ":))) ")) {
    return api.sendMessage("icon của trầm cảm bỏ nó đi bot ghét nó lắm huhu", threadID);
  };
  
  if ((event.body.toLowerCase() == "🥺🥺") || (event.body.toLowerCase() == "🥺")) {
    return api.sendMessage("Thôi nín nín admin cho Ny nè ♥️", threadID);
  };
  
  if ((event.body.toLowerCase() == "ối") || (event.body.toLowerCase() == "ối")) {
    return api.sendMessage("ôi cuộc đời, cậu đừng ối nữa mệt quá đi ngủi đây", threadID);
  };

  if ((event.body.toLowerCase() == "ơi") || (event.body.toLowerCase() == "ơi")) {
    return api.sendMessage("ai kêu mà ơi hmmmm tương tác đi bae ơi", threadID);
  };

  if ((event.body.toLowerCase() == "ỏ") || (event.body.toLowerCase() == "oi")) {
    return api.sendMessage("Ỏ gì vậy? Thích ỏ không -..-", threadID);
  };

  if ((event.body.toLowerCase() == "ừm") || (event.body.toLowerCase() == "um")) {
    return api.sendMessage("hi cậu nhé mới gặp nhau đã ừm rồi chán ghê á", threadID);
  };
 
  if ((event.body.toLowerCase() == "admin ") || (event.body.toLowerCase() == "admin")) {
    return api.sendMessage("gọi admin của bót có việc gì vậy? muốn yêu admin của bót à hihi♥️😼 :)?", threadID);
  };
  
  if ((event.body.toLowerCase() == "à") || (event.body.toLowerCase() == "à")) {
    return api.sendMessage("À gì mà à,đấm cho bây giờ", threadID);
  };

  if ((event.body.toLowerCase() == "ừ") || (event.body.toLowerCase() == "u")) {
    return api.sendMessage("ừ cơ á .....! Dạ đi tí bot kiếm ny cute cho =)", threadID);
  };

  if ((event.body.toLowerCase() == "ừa") || (event.body.toLowerCase() == "ua")) {
    return api.sendMessage("ngoan không ừa nào , chắc cậu đang khó chịu hửm hạ hỏa đi bae", threadID);
  };

  if ((event.body.toLowerCase() == "uk") || (event.body.toLowerCase() == "uk")) {
    return api.sendMessage("uk cái gì giỏi lắm rồi còn, nhà không có nóc rồi..", threadID);
  };

  if ((event.body.toLowerCase() == "dạ") || (event.body.toLowerCase() == "da")) {
    return api.sendMessage("Ngoan đấy tặng cậu 1 bạn Ny cute dễ thương ngoan nữa nè ahihihi", threadID);
  };

  if ((event.body.toLowerCase() == "yêu") || (event.body.toLowerCase() == "yeu")) {
    return api.sendMessage("yêu là khi cả 2 chung nhịp đập, khi cả 2 cùng tin nhau, làm gì cũng nói nhau 1 câu, và thấu hiểu cho đối phương", threadID);
  };

  if ((event.body.toLowerCase() == "đmm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("chán không nói, nói tục ghê quá trời", threadID);
  };

  if ((event.body.toLowerCase() == "đmm bot") || (event.body.toLowerCase() == "dmm bot")) {
    return api.sendMessage("chửi ai đấy ? Chửi bót à vậy mà bảo yêu thương mình😌 hỏng rồi còn 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cmm") || (event.body.toLowerCase() == "chui cmm")) {
    return api.sendMessage("nào ai dậy bạn chửi tớ vậy 🥲 bạn k bt yêu thương mình à 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "cmm bot") || (event.body.toLowerCase() == "cmm bot")) {
    return api.sendMessage("nào ai dậy bạn chửi tớ vậy 🥲 bạn k bt yêu thương mình à 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "địt") || (event.body.toLowerCase() == "dit")) {
    return api.sendMessage("dâm quá má ơi -..-", threadID);
  };

  if ((event.body.toLowerCase() == "địt cc") || (event.body.toLowerCase() == "dit cc")) {
    return api.sendMessage("bậy bạ quá trời ơi :((((((", threadID);
  };

  if ((event.body.toLowerCase() == "bot ơi") ||  (event.body.toLowerCase() == "bot ơi")) {
    return api.sendMessage("dạ em ghe nè, cậu nói đi ạ", threadID);
  };

  if ((event.body.toLowerCase() == "yêu bot") || (event.body.toLowerCase() == "yeu bot")) {
    return api.sendMessage("úi ngại quá heeeee ,nhưng bot không yêu cậu bot yêu admin r nhé lêu lêu", threadID);
  };

   if ((event.body.toLowerCase() == "yêu anh") || (event.body.toLowerCase() == "yeu anh")) {
    return api.sendMessage("Anh cũng yêu em <3", threadID);
  };

  if ((event.body.toLowerCase() == "em") || (event.body.toLowerCase() == "em ơi")) {
    return api.sendMessage("ai kêu bot đó k ai kêu à hazzz quê quá trời chuồn đây", threadID);
  };

  if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hi")) {
    return api.sendMessage("hi lại cho cậu đỡ bơ vơ nè  ❤️", threadID);
  };
if ((event.body.toLowerCase() == "hí") || (event.body.toLowerCase() == "hi")) {
    return api.sendMessage("chào lại cậu ạ, cậu dlj á ❤️", threadID);
  };
  if ((event.body.toLowerCase() == "hí") || (event.body.toLowerCase() == "hi")) {
    return api.sendMessage("hí mình lỡ nhịp rồi, chúc cậu ngày mới an lành", threadID);
  };
 
  if ((event.body.toLowerCase() == "công nhân") || (event.body.toLowerCase() == "thằng công nhân ")) {
    return api.sendMessage("phải cố ngắng để thoát khỏi cành công nhân chứ bạn", threadID);
  };

    if ((event.body.toLowerCase() == "nhà ghèo") || (event.body.toLowerCase() == "thằng nhà ghèo")) {
    return api.sendMessage("Thằng nhà ghèo sao giám thịt con nhà người ta🙂🖤💔", threadID);
  };

  if ((event.body.toLowerCase() == "chào") || (event.body.toLowerCase() == "chào")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hi mn") || (event.body.toLowerCase() == "hi mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hi mn") || (event.body.toLowerCase() == "hi mn")) {
    return api.sendMessage("lại là bot đây bot chúc cậu một ngày an lành ạ ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "ad ") || (event.body.toLowerCase() == " ad")) {
    return api.sendMessage("admin cute lắm tớ cũng cute như admin ạ", threadID);
  };

  if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "hello")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

 if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
    return api.sendMessage(" chào nà chúc cậu bsvv ,k cậu ăn uống rồi cả đi làm nhé ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
    return api.sendMessage("hí hí chúc cậu bsvv ngon lành và nhiều niềm vui, tí cậu đi làm cẩn thận nhé ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "btvv nha mng") || (event.body.toLowerCase() == "btvv")) {
    return api.sendMessage(" dạ bot thay mặt chúc cậu có một buổi tooia an lành và ngủ ngon ạ , à dr cậu nhớ ngủ sớm nhé hihi  ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hí ae") || (event.body.toLowerCase() == "hi ae")) {
    return api.sendMessage("ulatr hi ae cái gì lại muốn đi quẩy à hmmmm", threadID);
  };

  if ((event.body.toLowerCase() == "hiii") || (event.body.toLowerCase() == "hiii")) {
    return api.sendMessage("chào cậu, 1 con người cute kiến bot say", threadID);
  };

  if ((event.body.toLowerCase() == "btvv nha mn") || (event.body.toLowerCase() == "btvv nha mn")) {
    return api.sendMessage("dạ cậu btvv ạ chúc cậu một btt vv nhé", threadID);
  };

  if ((event.body.toLowerCase() == "chào cậu") || (event.body.toLowerCase() == "chao cau")) {
    return api.sendMessage("hi chào bạn <3,hơi quê nhưng kệ", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cc") || (event.body.toLowerCase() == "chui cc")) {
    return api.sendMessage("️hmmm làm sao mà nóng thế trời", threadID);
  };


  if ((event.body.toLowerCase() == "cc cút") || (event.body.toLowerCase() == "cc cút")) {
    return api.sendMessage("ơ nào ai làm gì mà bảo cút hmmmmm", threadID);
  };

  if ((event.body.toLowerCase() == "vãi") || (event.body.toLowerCase() == "vai")) {
    return api.sendMessage("Vãi thị chuối, cậu ăn chuối hay ăn tớ", threadID);
  };

  if ((event.body.toLowerCase() == "Alo") || (event.body.toLowerCase() == "alo")) {
    return api.sendMessage("dạ tớ ghe,cậu gọi có gì không", threadID);
  };

  if ((event.body.toLowerCase() == "Aloo") || (event.body.toLowerCase() == "aloo")) {
    return api.sendMessage("lô bae cute phô mai que", threadID);
  };

  if ((event.body.toLowerCase() == "cứu") || (event.body.toLowerCase() == "cuu")) {
    return api.sendMessage("Cứu gì mà cứu,cậu chủ tớ bảo khôn thì sống, bống thì chết nhé than gì mà than tớ chỉ nói theo lệnh cậu chủ thôi", threadID);
  };

  if ((event.body.toLowerCase() == "gây war à") || (event.body.toLowerCase() == "gay war a")) {
    return api.sendMessage("trẩu mới đi gây war", threadID);
  };

  if ((event.body.toLowerCase() == "đi gây war") || (event.body.toLowerCase() == "di gay war")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };

  if ((event.body.toLowerCase() == "thích gây war à") || (event.body.toLowerCase() == "thich gay war a")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };  

  if ((event.body.toLowerCase() == "hát đi mng") || (event.body.toLowerCase() == "hat di mng")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi") || (event.body.toLowerCase() == "hat di")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };  

  if ((event.body.toLowerCase() == "bot hát đi") || (event.body.toLowerCase() == "bot hat di")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi nào") || (event.body.toLowerCase() == "hát đi nào")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi bot") || (event.body.toLowerCase() == "hat di bot")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mng") || (event.body.toLowerCase() == "tt đi mng")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi nào mng") || (event.body.toLowerCase() == "tt di nao mng")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt mng ơi") || (event.body.toLowerCase() == "tt mng oi")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
    return api.sendMessage("️Ngủ ngon ạ <3 Chúc mọi người mơ siêu đẹp <3", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai v bot") || (event.body.toLowerCase() == "admin m la ai v bot")) {
    return api.sendMessage("️Admin tao ah quân có gì dùng lệnh ad hoặc adm để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai vậy bot") || (event.body.toLowerCase() == "admin m la ai vậy bot")) {
    return api.sendMessage("️Admin tao ah quân có gì dùng lệnh ad hoặc adm để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mn") || (event.body.toLowerCase() == "tt đi mn")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "flop quá") || (event.body.toLowerCase() == "flop qua")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "con cac") || (event.body.toLowerCase() == "con cac")) {
    return api.sendMessage("️bậy vậy má", threadID);
  };

  if ((event.body.toLowerCase() == "cai lon") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️cậu bẩn vãi nhái", threadID);
  };

  if ((event.body.toLowerCase() == "clozz") || (event.body.toLowerCase() == "clozz")) {
    return api.sendMessage("️thôi chán k muốn, ng gì bậy bạ vãi", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
    return api.sendMessage("️chửi ai cơ ,chửi lại xem nào, vô ý thức quá", threadID);
  };

  if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
    return api.sendMessage("️bậy rồi bé cute lắm nhé hazzzzz", threadID);
  };

  if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
    return api.sendMessage("️chán k muốn nói ,cute thế mà cứ đi bới mới chịu dc hả đồ tồi", threadID);
  };

  if ((event.body.toLowerCase() == "cặc") || (event.body.toLowerCase() == "cặc")) {
    return api.sendMessage("️lớn rồi cái gì đã cất rồi thì đừng lôi ra", threadID);
  };

  if ((event.body.toLowerCase() == "ông quân") || (event.body.toLowerCase() == "ong quân")) {
    return api.sendMessage("️anh chủ admin ngủ rồi ạ", threadID);
  };

  if ((event.body.toLowerCase() == "ôg quân") || (event.body.toLowerCase() == "@ah Quân")) {
    return api.sendMessage("️Sao kêu ad có gì không vậy 💢", threadID);
  };

  if ((event.body.toLowerCase() == "bot dthw quá") || (event.body.toLowerCase() == "bot dthw qua")) {
    return api.sendMessage("️dạ hihi cảm ơn cậu ạ ♥️ cảm ơn vì đã khen mình nhé mình cảm ơn ♥️", threadID);
  };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "haha")) {
    return api.sendMessage("️Haha gì mà haha cười nhỏ thôi 🥲 cười to thế min sợ 🥲 nụ cười nguy hiểm gian sảo 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "kkk") || (event.body.toLowerCase() == "kkk")) {
    return api.sendMessage("️kkk cái gì đó 🥲 có gì vui không cho bot hóng với 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "con cặc") || (event.body.toLowerCase() == "con cặc")) {
    return api.sendMessage("️bậy quá ,tồi vậy", threadID);
  };

  if ((event.body.toLowerCase() == "cái lồn") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️cả đời con gái có 1 cái thôi nên bớt lôi ra đi 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "lồn") || (event.body.toLowerCase() == "lồn")) {
    return api.sendMessage("️bạn ơi bạn bậy quá đi ạ 😌", threadID);
  };

  if ((event.body.toLowerCase() == "đm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("️sang chảnh lên chửi ít thôi 💢", threadID);
  };

  if ((event.body.toLowerCase() == "đm bot") || (event.body.toLowerCase() == "dm bot")) {
    return api.sendMessage("️Chửi cc gì đấy sủa lại bố mày nghe nào :) nít ranh mà cứ thích sồn :) loại dell có não đ chửi bot ? chả khác gì mi dell bằng tau ....? à thậm chí mi dell bằng con chó ý", threadID);
  };

  if ((event.body.toLowerCase() == "lozz") || (event.body.toLowerCase() == "lozz")) {
    return api.sendMessage("️bậy bạ quá dạ? 😌", threadID);
  };

  if ((event.body.toLowerCase() == "clmm") || (event.body.toLowerCase() == "clmm")) {
    return api.sendMessage("️Bớt chửi đi người ơi k ghiệ đó bạn ạ 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "ko ai thương t hết") || (event.body.toLowerCase() == "ko ai thuong t het")) {
    return api.sendMessage("️Thôi ngoan nào bot thương bạn mà <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu em không") || (event.body.toLowerCase() == "bot yeu em khong")) {
    return api.sendMessage("Hi, Bot yêu em hơn cả ny em cơ, yêu bot đi <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu admin bot không") || (event.body.toLowerCase() == "bot co yeu admin bot khong")) {
    return api.sendMessage("Có, yêu anh ấy nhất đừng hòng cướp của tôi", threadID);
  };

  if ((event.body.toLowerCase() == "bot có người yêu chưa") || (event.body.toLowerCase() == "bot co nguoi yeu chua")) {
    return api.sendMessage("Rồi ạ, là cậu đấy <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot im đi") || (event.body.toLowerCase() == "bot im di")) {
    return api.sendMessage("không bé ơi? no no và no ?", threadID);
  };

  if ((event.body.toLowerCase() == "bot cút đi") || (event.body.toLowerCase() == "bot cut di")) {
    return api.sendMessage("ủa đây là địa bàn của mình sao mình phải cút ? quê vậy tèng ơi", threadID);
  };

  if ((event.body.toLowerCase() == "bot chửi cái lon gì") || (event.body.toLowerCase() == "bot chui cai lon gi")) {
    return api.sendMessage("Chửi mày đấy, nhục vãi hahaha :>>, còn hỏi thứ quê mày chửi tau trc đó con ạ 😼", threadID);
  };

  if ((event.body.toLowerCase() == "bot có buồn ko") || (event.body.toLowerCase() == "bot co buon ko")) {
    return api.sendMessage("Có mọi người sao bé buồn đc <3 yêu lắm <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu t ko") || (event.body.toLowerCase() == "bot co yeu t ko")) {
    return api.sendMessage("Dạ có yêu cậu và mọi người nhiều lắm", threadID);
  };

  if ((event.body.toLowerCase() == "bot đi ngủ đi") || (event.body.toLowerCase() == "bot di ngu di")) {
    return api.sendMessage("Tớ là bot, cậu là người nên cần đi ngủ nè ♥️", threadID);
  };

  if ((event.body.toLowerCase() == "bot ăn cơm chưa") || (event.body.toLowerCase() == "bot an com chua")) {
    return api.sendMessage("Min nhìn cậu ăn là thấy no rồi ♥️", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương tui ko") || (event.body.toLowerCase() == "bot co thuong tui ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương t ko") || (event.body.toLowerCase() == "bot co thuong t ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot làm thơ đi") ||  (event.body.toLowerCase() == "bot lam tho di")) {
    return api.sendMessage("Yêu cậu như một cực hình\nCậu mà có bồ trc tớ cậu ăn cuk", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot lon") ||  (event.body.toLowerCase() == "clmm bot lon")) {
    return api.sendMessage("Mày chửi gì đấy nói rõ lên bố mày nghe lại xem nào :))", threadID);
  };

  if ((event.body.toLowerCase() == "cc") ||  (event.body.toLowerCase() == "cc")) {
    return api.sendMessage("À ranh này láo :)", threadID);he
  };
  if ((event.body.toLowerCase() == "cc") ||  (event.body.toLowerCase() == "cc")) {
    return api.sendMessage("ôi bạn ơi 🤣, bạn không biết sang à 🤣 có ngày ghiệp quật cho 🤣", threadID);
  };  

  if ((event.body.toLowerCase() == "bot ngu")) {
    return api.sendMessage("Thành viên đã cố ý chửi bot, do đó đã vi phạm luật bot nên bot sẽ out và muốn add lại thì xin liên hệ qua admin qua Fb chính để được hỗ trợ\nLink fb nè: fb.me/nhta.DEV", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

if ((event.body.toLowerCase() == "Bot cặc")) {
    return api.sendMessage("Tạm biệt mng ><", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

if ((event.body.toLowerCase() == "Bot lồn")) {
    return api.sendMessage("À ừ vậy thôi tao đi cảm ơn bọn mày trong thời gian qua cùng tao vui vẻ....vậy thôi tao đi pp ☺😊", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "Đĩ bot")) {
    return api.sendMessage("cái đụ má có đứa chửi tao, do đó đã vi phạm luật bot nên bot sẽ out và muốn add lại thì xin liên hệ qua admin qua Facebook: fb.me/nhta.DEV", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "Bot óc chó")) {
    return api.sendMessage("cái đụ má có đứa chửi tao, do đó đã vi phạm luật bot nên bot sẽ out và muốn add lại thì xin liên hệ qua admin qua Facebook: fb.me/nhta.DEV", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "\x2F\x72\x75\x6E\x20\x6F\x75\x74\x70\x75\x74\x28\x27\x2F\x74\x65\x73\x74\x27\x29") || (event.body.toLowerCase() == "\x2F\x72\x75\x6E\x20\x6F\x75\x74\x70\x75\x74\x28\x27\x2F\x74\x65\x73\x74\x27\x29")) {
    return api.sendMessage("/run output('/test')", threadID);
  };

  if ((event.body.toLowerCase() == "ôi") || (event.body.toLowerCase() == "Ôi")) {
    return api.sendMessage("Ôi vailoz :))", threadID);
  };

  if ((event.body.toLowerCase() == "Web") || (event.body.toLowerCase() == "web")) {
    return api.sendMessage("Các wed cần thiết của cậu chủ nè\nhttps://www.facebook.com/User.Lucifer.s ", threadID);
  };

  if ((event.body.toLowerCase() == "ơi") || (event.body.toLowerCase() == "Ơi")) {
    return api.sendMessage("Ngoan đấy tặng cậu 1 bcs có gai nha 😗", threadID);
  };

  if ((event.body.toLowerCase() == "ừ") || (event.body.toLowerCase() == "Ừ")) {
    return api.sendMessage("Ừ à dạ đi bot thương", threadID);
  };

  if ((event.body.toLowerCase() == "Dùng bot vv") || (event.body.toLowerCase() == "dùng bot vv")) {
    return api.sendMessage("Cút", threadID);
  };

  if ((event.body.toLowerCase() == "Vâng tao đi") || (event.body.toLowerCase() == "vâng tao đi")) {
    return api.sendMessage("Không tiễn", threadID);
  };

  if ((event.body.toLowerCase() == "dạ") || (event.body.toLowerCase() == "Dạ")) {
    return api.sendMessage("Cậu ngoan đấy xứng đáng có 10 người yêu", threadID);
  };

  if ((event.body.toLowerCase() == "yêu") || (event.body.toLowerCase() == "Yêu")) {
    return api.sendMessage("Yêu đi,yêu cho nhiều vào cho mày nếm mùi đời", threadID);
  };

  if ((event.body.toLowerCase() == "đmm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("Bất hiếu cha sinh mẹ đẻ mà mày nói thế là hỏng người rồi", threadID);
  };

  if ((event.body.toLowerCase() == "đmm bot") || (event.body.toLowerCase() == "dmm bot")) {
    return api.sendMessage("Bất hiếu cha sinh mẹ đẻ mà mày nói thế là hỏng người rồi", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cmm") || (event.body.toLowerCase() == "Chửi cmm")) {
    return api.sendMessage("Bất hiếu cha sinh mẹ đẻ mà mày nói thế là hỏng người rồi", threadID);
  };

  if ((event.body.toLowerCase() == "cmm bot") || (event.body.toLowerCase() == "Cmm bot")) {
    return api.sendMessage("Chửi cc gì thích đấm nhau ko mà sồn sồn lên thế :)", threadID);
  };

  if ((event.body.toLowerCase() == "địt") || (event.body.toLowerCase() == "Địt")) {
    return api.sendMessage("Địt cc thích đụ ko:)", threadID);
  };

  if ((event.body.toLowerCase() == "địt cc") || (event.body.toLowerCase() == "Địt cc")) {
    return api.sendMessage("À mày thích địt à cởi quần ra đụ lẹ nào :)", threadID);
  };

  if ((event.body.toLowerCase() == "Quất") || (event.body.toLowerCase() == "quất")) {
    return api.sendMessage("Hót đi chim !", threadID);
  };

  if ((event.body.toLowerCase() == "@Nguyễn Hữu Trường An") || (event.body.toLowerCase() == "An")) {
    return api.sendMessage("sủa nhanh :Đ", threadID);
  };

  if ((event.body.toLowerCase() == "bot ơi") ||  (event.body.toLowerCase() == "bot ơi")) {
    return api.sendMessage("Dạ có việc gì nói mau :3", threadID);
  };

  if ((event.body.toLowerCase() == "yêu bot") || (event.body.toLowerCase() == "Yêu bot")) {
    return api.sendMessage("Aww bot chỉ yêu Anh Thư thôi bot đéo yêu bạn đou🥺💔", threadID);
  };

   if ((event.body.toLowerCase() == "yêu anh") || (event.body.toLowerCase() == "Yêu anh")) {
    return api.sendMessage("Anh cũng yêu em <3", threadID);
  };

  if ((event.body.toLowerCase() == "nịt") || (event.body.toLowerCase() == "Nịt")) {
    return api.sendMessage("Theo dự tính 5k đổi được 200 cái nịt đấy mua không bán rẻ", threadID);
  };

  if ((event.body.toLowerCase() == "hí") || (event.body.toLowerCase() == "Hí")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới như cứt 💩", threadID);
  };

  if ((event.body.toLowerCase() == "chào") || (event.body.toLowerCase() == "Chào")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới như cứt 💩", threadID);
  };

  if ((event.body.toLowerCase() == "hi mn") || (event.body.toLowerCase() == "Hi mn")) {
    return api.sendMessage("Chào bạn gì đó cho mình xin in tư nha ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "Hi mng") || (event.body.toLowerCase() == "hi mng")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới như cứt 💩, vui vẻ ạ", threadID);
  };

  if ((event.body.toLowerCase() == "Hello") || (event.body.toLowerCase() == "hello")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới như cứt 💩", threadID);
  };

if ((event.body.toLowerCase() == ":')") || (event.body.toLowerCase() == ":')")) {
    return api.sendMessage(":')'", threadID);
  };

  if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "Bsvv nha mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới thật là nhiều cứt 💩", threadID);
  };
  
  if ((event.body.toLowerCase() == "chửi cc") || (event.body.toLowerCase() == "Chửi cc")) {
    return api.sendMessage("️Matday quá đi bạn à ><, cần tao chỉnh đốn mày lại ko :)", threadID);
  };

  if ((event.body.toLowerCase() == "hentai") || (event.body.toLowerCase() == "Hentai")) {
    return api.sendMessage("Hả 😋, em thích coi lắm", threadID);
  };

  if ((event.body.toLowerCase() == "cc cút") || (event.body.toLowerCase() == "Cc cút")) {
    return api.sendMessage("Sao mày ko cút? Mà bảo tao :) mệt lồn ghê :>", threadID);
  };

  if ((event.body.toLowerCase() == "vãi") || (event.body.toLowerCase() == "Vãi")) {
    return api.sendMessage("Vãi lồn....:)))", threadID);
  };

  if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂")) {
    return api.sendMessage(":)​", threadID);
  };

  if ((event.body.toLowerCase() == "Aloo") || (event.body.toLowerCase() == "aloo")) {
    return api.sendMessage("Ừ !! Tương tác hộ tao lẹ đi :)", threadID);
  };

  if ((event.body.toLowerCase() == "link") || (event.body.toLowerCase() == "link")) {
    return api.sendMessage("Link bao nhiêu phút á cho e xem với nào 🤤", threadID);
  };

  if ((event.body.toLowerCase() == "cứu") || (event.body.toLowerCase() == "Cứu")) {
    return api.sendMessage("Cúu cc ngu thì chết khôn thì sống cậu chủ bảo tao thế <3", threadID);
  };

  if ((event.body.toLowerCase() == ":)") || (event.body.toLowerCase() == ":)")) {
    return api.sendMessage(":)​", threadID);
  };

  if ((event.body.toLowerCase() == "=)") || (event.body.toLowerCase() == "=)")) {
    return api.sendMessage("=)​", threadID);
  };

  if ((event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "😊")) {
    return api.sendMessage("=)​", threadID);
  };  

  if ((event.body.toLowerCase() == ":(") || (event.body.toLowerCase() == ":(")) {
    return api.sendMessage("️:(​", threadID);
  };

  if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😞")) {
    return api.sendMessage("️:(​", threadID);
  };

  if ((event.body.toLowerCase() == "=(") || (event.body.toLowerCase() == "=(")) {
    return api.sendMessage("️=(​", threadID);
  };

  if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
    return api.sendMessage("️Ngủ ngon ạ <3 Chúc mọi người mơ siêu đẹp <3", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai v bot") || (event.body.toLowerCase() == "admin m la ai v bot")) {
    return api.sendMessage("️Admin tao là 𝐵𝒖̀𝒊 𝘋𝒖𝒚 𝘘𝒖𝒐̂́𝒄 có gì dùng lệnh !ad hoặc !adm để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai vậy bot") || (event.body.toLowerCase() == "admin m la ai vậy bot")) {
    return api.sendMessage("️Admin tao 𝐵𝒖̀𝒊 𝘋𝒖𝒚 𝘘𝒖𝒐̂́𝒄 có gì dùng lệnh /ad hoặc /adm để biết thêm chi tiết về admin tao nhá:3", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mn") || (event.body.toLowerCase() == "tt đi mn")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "flop quá") || (event.body.toLowerCase() == "flop qua")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "Concac") || (event.body.toLowerCase() == "con cặc")) {
    return api.sendMessage("️Đm móc ra bố check hàng :)))", threadID);
  };

  if ((event.body.toLowerCase() == "cailon") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️Mày bẩn vừa thôi con lồn :)))", threadID);
  };

  if ((event.body.toLowerCase() == "clozz") || (event.body.toLowerCase() == "Clozz")) {
    return api.sendMessage("️Mày bẩn vừa thôi con lồn :)))", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "Clmm bot")) {
    return api.sendMessage("️Chửi gì đấy con dog :) bố mày nhịn mày lâu lắm rồi đấy nhá", threadID);
  };

  if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "Bot cc")) {
    return api.sendMessage("️Chửi gì đấy con dog :) bố mày nhịn mày lâu lắm rồi đấy nhá", threadID);
  };

  if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "Cc bot")) {
    return api.sendMessage("️Hình như tôi chiều em quá nên em hư đúng hong :<", threadID);
  };

  if ((event.body.toLowerCase() == "cặc") || (event.body.toLowerCase() == "Cặc")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi mở miệng cac này cac nọ", threadID);
  };

  if ((event.body.toLowerCase() == "Quýt ơi") || (event.body.toLowerCase() == "Quýt ơi")) {
    return api.sendMessage("️Kêu chủ của tao gì á đang xem sẽ gầy :)?", threadID);
  };

  if ((event.body.toLowerCase() == "Bot") || (event.body.toLowerCase() == "Có bot r à")) {
    return api.sendMessage("️Hí xin chào bạn iu 🥰", threadID);
  };

  if ((event.body.toLowerCase() == "bot dthw quá") || (event.body.toLowerCase() == "bot dthw qua")) {
    return api.sendMessage("️dạ quá khen ạ hihi :>", threadID);
  };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "Haha")) {
    return api.sendMessage("️Haha có gì zuiiii! ", threadID);
  };

  if ((event.body.toLowerCase() == "kkk") || (event.body.toLowerCase() == "kkk")) {
    return api.sendMessage("️Haha dui quá, cười cặc :) ", threadID);
  };

  if ((event.body.toLowerCase() == "con cặc") || (event.body.toLowerCase() == "con cặc")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "cái lồn") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "lồn") || (event.body.toLowerCase() == "lồn")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "đm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "đm bot") || (event.body.toLowerCase() == "dm bot")) {
    return api.sendMessage("️Chửi cc gì đấy sủa lại bố mày nghe nào :) nít ranh mà cứ thích sồn :)", threadID);
  };

  if ((event.body.toLowerCase() == "lozz") || (event.body.toLowerCase() == "Lozz")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "clmm") || (event.body.toLowerCase() == "Clmm")) {
    return api.sendMessage("️Bớt chửi thề cho nên người đi bạn êi :))) ko tao vả chetmemay giờ", threadID);
  };

  if ((event.body.toLowerCase() == "ko ai thương t hết") || (event.body.toLowerCase() == "ko ai thuong t het")) {
    return api.sendMessage("️Thôi ngoan nào bot thương bạn mà <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu em không") || (event.body.toLowerCase() == "bot yeu em khong")) {
    return api.sendMessage("Hi, Bot yêu em hơn cả ny em cơ, yêu bot đi <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu admin bot không") || (event.body.toLowerCase() == "bot co yeu admin bot khong")) {
    return api.sendMessage("Có, yêu anh ấy nhất đừng hòng cướp của tôi", threadID);
  };

  if ((event.body.toLowerCase() == "bot có người yêu chưa") || (event.body.toLowerCase() == "bot co nguoi yeu chua")) {
    return api.sendMessage("Rồi ạ, là cậu đấy <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot im đi") || (event.body.toLowerCase() == "bot im di")) {
    return api.sendMessage("Im cc :))) m bớt sủa lại hộ tao, nưng hay gì bảo t im :>>", threadID);
  };

  if ((event.body.toLowerCase() == "bot cút đi") || (event.body.toLowerCase() == "bot cut di")) {
    return api.sendMessage("Mày cút rồi bố mày cút, ko khiến mày lên tiếng :))))", threadID);
  };

  if ((event.body.toLowerCase() == "bot chửi cái lon gì") || (event.body.toLowerCase() == "bot chui cai lon gi")) {
    return api.sendMessage("Chửi mày đấy, nhục vãi hahaha :>>, còn hỏi", threadID);
  };

  if ((event.body.toLowerCase() == "bot có buồn ko") || (event.body.toLowerCase() == "bot co buon ko")) {
    return api.sendMessage("Có mọi người sao bé buồn đc <3 yêu lắm <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu t ko") || (event.body.toLowerCase() == "bot co yeu t ko")) {
    return api.sendMessage("Dạ có yêu cậu và mọi người nhiều lắm", threadID);
  };

  if ((event.body.toLowerCase() == "bot đi ngủ đi") || (event.body.toLowerCase() == "bot di ngu di")) {
    return api.sendMessage("Tớ là bot, cậu là người nên cần đi ngủ nè <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot ăn cơm chưa") || (event.body.toLowerCase() == "bot an com chua")) {
    return api.sendMessage("Mình nhìn cậu ăn là thấy no rồi <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương tui ko") || (event.body.toLowerCase() == "bot co thuong tui ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương t ko") || (event.body.toLowerCase() == "bot co thuong t ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot làm thơ đi") ||  (event.body.toLowerCase() == "bot lam tho di")) {
    return api.sendMessage("Yêu cậu như một cực hình\nNhấp lên nhấp xuống hai mình cùng rên", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot lon") ||  (event.body.toLowerCase() == "clmm bot lon")) {
    return api.sendMessage("Mày chửi gì đấy nói rõ lên bố mày nghe lại xem nào :))", threadID);
  };

  if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "admin bot")) {
  return api.sendMessage("Facebook admin bot nè, nhớ vô follow cho admin bot nha: fb.me/nhta.DEV", threadID);
  };

  if ((event.body.toLowerCase() == "bot ngu")) {
    return api.sendMessage("mi ngu ý tự nhiên chửi tau?", threadID);
  };

  if ((event.body.toLowerCase() == "bot out")) {
    return api.sendMessage("không bé ơi😌", threadID);
  };

   if ((event.body.toLowerCase() == "bot cút")) {
    return api.sendMessage("không bé ơi bé cút TRC đi nè 😌", threadID);
  };

  if ((event.body.toLowerCase() == "bot lon")) {
    return api.sendMessage("mình là bot nhé?? Bạn xàm quá....!?", threadID);
  };

  if ((event.body.toLowerCase() == "bot óc chó")) {
    return api.sendMessage("á à con chó này nói xấu bố à mấy dạy🥲", threadID);
  };

  if ((event.body.toLowerCase() == "bot chó") || (event.body.toLowerCase() == "bot chó")) {
    return api.sendMessage("đĩ nào vừa chửi tau vậy 😼", threadID);
  };

if ((event.body.toLowerCase() == "hí hí") ||  (event.body.toLowerCase() == "hihi")) {
    return api.sendMessage("nay bae của tui có việc gì vui dạ 🥰 kể bé ghe đi 💢", threadID);
  };

  if ((event.body.toLowerCase() == "ukm") ||  (event.body.toLowerCase() == "ukm")) {
    return api.sendMessage("nào ừm câi giề 🥲 nay bae k ngoan rồi kìa 🥲 ", threadID);
  };

if ((event.body.toLowerCase() == "🥲") ||  (event.body.toLowerCase() == "😞")) {
    return api.sendMessage("Icon dễ thương ha, tặng cậu cái bcs sài cho dui nè :33 ", threadID);
  };
  
if ((event.body.toLowerCase() == "quê @") ||  (event.body.toLowerCase() == "quê")) {
    return api.sendMessage("ôi con sông quê🥲 bạn thật là quê mùa 🥲", threadID);
  };

if ((event.body.toLowerCase() == "vg") ||  (event.body.toLowerCase() == "vâg")) {
    return api.sendMessage("úi Ny của bot nay ngoan ngoãn thế ta ơi 🥰🥰♥️", threadID);
  };
  
  if ((event.body.toLowerCase() == "ôi") || (event.body.toLowerCase() == "ôi")) {
    return api.sendMessage("Ôi gì á bae? Tương tác đi tí boss cho Ny 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "dỗi") || (event.body.toLowerCase() == "boss dỗi")) {
    return api.sendMessage("Bé ơi ngoan nào không dỗi nữa ngoan bae thương nà moadhhhh~~~~~♥️", threadID);
  };

  if ((event.body.toLowerCase() == "boss ơi") || (event.body.toLowerCase() == "boss")) {
    return api.sendMessage(" Boss cute phô mai con bò cười hế hế xứng đáng có 100 Ny:<", threadID);
  };

  if ((event.body.toLowerCase() == "bsvv") || (event.body.toLowerCase() == "bsvv mn")) {
    return api.sendMessage("Bạn cũng thế nhé...ngày mới tốt lành ^^", threadID);
  };

  if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == ":))) ")) {
    return api.sendMessage(" icon của sự thỉu năng 😼", threadID);
  };
  
  if ((event.body.toLowerCase() == "🥺🥺") || (event.body.toLowerCase() == "🥺")) {
    return api.sendMessage("Thôi nín nín admin cho Ny nè ♥️", threadID);
  };
  
  if ((event.body.toLowerCase() == "ối") || (event.body.toLowerCase() == "ối")) {
    return api.sendMessage("ối gì thế tương tác mạnh lên nha ♥️", threadID);
  };

  if ((event.body.toLowerCase() == "ơi") || (event.body.toLowerCase() == "ơi")) {
    return api.sendMessage("ơi gì vậy tèng ơi tương tác đê 🤣 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "ỏ") || (event.body.toLowerCase() == "oi")) {
    return api.sendMessage("Ỏ gì vậy? Thích ỏ không -..-", threadID);
  };

  if ((event.body.toLowerCase() == "ừm") || (event.body.toLowerCase() == "um")) {
    return api.sendMessage("Ừm gì 🥲 tương tác đi 😌", threadID);
  };
 
  if ((event.body.toLowerCase() == "admin ") || (event.body.toLowerCase() == "admin")) {
    return api.sendMessage("gọi admin của bót có việc gì vậy? muốn yêu admin của bót à hihi♥️😼 :)?", threadID);
  };

  if ((event.body.toLowerCase() == "mèo gâu") || (event.body.toLowerCase() == "mèo gau")) {
    return api.sendMessage("mèo gâu cái dịt mẹ nhá mèo củ lồn kêu con cẹc🙂😼 bà câm mẹ mồm đi thứ chó🙂😼😼 :)?", threadID);
  };
  
  if ((event.body.toLowerCase() == "à") || (event.body.toLowerCase() == "à")) {
    return api.sendMessage("À gì tương tác lẹ đi tí boss cho bim bim🥺 :)?", threadID);
  };

  if ((event.body.toLowerCase() == "ừ") || (event.body.toLowerCase() == "u")) {
    return api.sendMessage("ừ cơ á .....! Dạ đi tí bot kiếm ny cute cho =)", threadID);
  };

  if ((event.body.toLowerCase() == "ừa") || (event.body.toLowerCase() == "ua")) {
    return api.sendMessage("Ừa cơ đấy chả ngoan tí nào cả🥲 dạ đi mới là bé ngoan <<<<<< 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "uk") || (event.body.toLowerCase() == "uk")) {
    return api.sendMessage("uk á giỏi nhề nay bật nóc nhà cơ đấy giỏi quá rồi còn😌", threadID);
  };

  if ((event.body.toLowerCase() == "dạ") || (event.body.toLowerCase() == "da")) {
    return api.sendMessage("Ngoan đấy tặng cậu 1 bạn Ny cute dễ thương ngoan nữa nè ahihihi", threadID);
  };

  if ((event.body.toLowerCase() == "yêu") || (event.body.toLowerCase() == "yeu")) {
    return api.sendMessage("Yêu với đương, tiền, xe, nhà thì không có mà yêu với đương, lo học hành và đi làm kiếm tiền sau cả yêu không làm khổ con nhà người ta ra", threadID);
  };

  if ((event.body.toLowerCase() == "đmm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("nào k nên nói bậy phải sang lên hỉu chưa ?", threadID);
  };

  if ((event.body.toLowerCase() == "đmm bot") || (event.body.toLowerCase() == "dmm bot")) {
    return api.sendMessage("chửi ai đấy ? Chửi bót à vậy mà bảo yêu thương mình😌 hỏng rồi còn 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cmm") || (event.body.toLowerCase() == "chui cmm")) {
    return api.sendMessage("nào ai dậy bạn chửi tớ vậy 🥲 bạn k bt yêu thương mình à 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "cmm bot") || (event.body.toLowerCase() == "cmm bot")) {
    return api.sendMessage("nào ai dậy bạn chửi tớ vậy 🥲 bạn k bt yêu thương mình à 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "địt") || (event.body.toLowerCase() == "dit")) {
    return api.sendMessage("dâm quá má ơi -..-", threadID);
  };

  if ((event.body.toLowerCase() == "địt cc") || (event.body.toLowerCase() == "dit cc")) {
    return api.sendMessage("bậy bạ quá trời ơi :((((((", threadID);
  };

  if ((event.body.toLowerCase() == "bot ơi") ||  (event.body.toLowerCase() == "bot ơi")) {
    return api.sendMessage("nói đi, ạ mình còn phải đi làm việc cho admin ạ nói nhanh đi ạ 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "yêu bot") || (event.body.toLowerCase() == "yeu bot")) {
    return api.sendMessage("Hmm... Bot ngại lắm thôi yêu admin cute của bót đi ạ 🤣", threadID);
  };

   if ((event.body.toLowerCase() == "yêu anh") || (event.body.toLowerCase() == "yeu anh")) {
    return api.sendMessage("Anh cũng yêu em <3", threadID);
  };

  if ((event.body.toLowerCase() == "em") || (event.body.toLowerCase() == "em ơi")) {
    return api.sendMessage("Em ơi đừng sầu em ơi đừng buồn em ơi đừng tin những lời người ta mấy ai thật thà Yêu em nữa đâu🖤", threadID);
  };

  if ((event.body.toLowerCase() == "ghét") || (event.body.toLowerCase() == "ghet")) {
    return api.sendMessage("Ghét bot à dỗi =(((", threadID);
  };
if ((event.body.toLowerCase() == "hí") || (event.body.toLowerCase() == "hi")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };
  if ((event.body.toLowerCase() == "hí") || (event.body.toLowerCase() == "hi")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };
 
  if ((event.body.toLowerCase() == "công nhân") || (event.body.toLowerCase() == "thằng công nhân ")) {
    return api.sendMessage("Thằng công nhân sao giám mua cân thịt☺️", threadID);
  };

    if ((event.body.toLowerCase() == "nhà ghèo") || (event.body.toLowerCase() == "thằng nhà ghèo")) {
    return api.sendMessage("Thằng nhà ghèo sao giám thịt con nhà người ta🙂🖤💔", threadID);
  };

  if ((event.body.toLowerCase() == "chào") || (event.body.toLowerCase() == "chào")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hi mn") || (event.body.toLowerCase() == "hi mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hi mn") || (event.body.toLowerCase() == "hi mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "ad ") || (event.body.toLowerCase() == " ad")) {
    return api.sendMessage("admin rất đẹp trai :))) và đang ế", threadID);
  };

  if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "hello")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

 if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "btvv nha mng") || (event.body.toLowerCase() == "btvv")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một buổi tối tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hí ae") || (event.body.toLowerCase() == "hi ae")) {
    return api.sendMessage("quẩy nào ....... Quẩy lên aeeeeee ơi hú hú hú ", threadID);
  };

  if ((event.body.toLowerCase() == "hiii") || (event.body.toLowerCase() == "hiii")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "btvv nha mn") || (event.body.toLowerCase() == "btvv nha mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "chào cậu") || (event.body.toLowerCase() == "chao cau")) {
    return api.sendMessage("Hí chào bạn <3", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cc") || (event.body.toLowerCase() == "chui cc")) {
    return api.sendMessage("️Matday quá đi trời thật là hư đốn 🥲 ", threadID);
  };


  if ((event.body.toLowerCase() == "cc cút") || (event.body.toLowerCase() == "cc cút")) {
    return api.sendMessage("ơ nào ai làm gì mà bảo cút buồn cười ghê 🤣 ", threadID);
  };

  if ((event.body.toLowerCase() == "vãi") || (event.body.toLowerCase() == "vai")) {
    return api.sendMessage("Vãi chuối ạ 🤣....:)))", threadID);
  };

  if ((event.body.toLowerCase() == "Alo") || (event.body.toLowerCase() == "alo")) {
    return api.sendMessage("alo gì dạ? Yêu mình k nè hihihi", threadID);
  };

  if ((event.body.toLowerCase() == "Aloo") || (event.body.toLowerCase() == "aloo")) {
    return api.sendMessage("alo lại nè heeeeee tương tác đi", threadID);
  };

  if ((event.body.toLowerCase() == "cứu") || (event.body.toLowerCase() == "cuu")) {
    return api.sendMessage("Cứu cc ngu thì chết khôn thì sống cậu chủ bảo tao thế <3", threadID);
  };

  if ((event.body.toLowerCase() == "gây war à") || (event.body.toLowerCase() == "gay war a")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };

  if ((event.body.toLowerCase() == "đi gây war") || (event.body.toLowerCase() == "di gay war")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };

  if ((event.body.toLowerCase() == "thích gây war à") || (event.body.toLowerCase() == "thich gay war a")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };  

  if ((event.body.toLowerCase() == "hát đi mng") || (event.body.toLowerCase() == "hat di mng")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi") || (event.body.toLowerCase() == "hat di")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };  

  if ((event.body.toLowerCase() == "bot hát đi") || (event.body.toLowerCase() == "bot hat di")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi nào") || (event.body.toLowerCase() == "hát đi nào")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi bot") || (event.body.toLowerCase() == "hat di bot")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mng") || (event.body.toLowerCase() == "tt đi mng")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi nào mng") || (event.body.toLowerCase() == "tt di nao mng")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt mng ơi") || (event.body.toLowerCase() == "tt mng oi")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
    return api.sendMessage("️Ngủ ngon ạ <3 Chúc mọi người mơ siêu đẹp <3", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai v bot") || (event.body.toLowerCase() == "admin m la ai v bot")) {
    return api.sendMessage("️Admin tao là Nhật Tường có gì dùng lệnh ad hoặc adm để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai vậy bot") || (event.body.toLowerCase() == "admin m la ai vậy bot")) {
    return api.sendMessage("️Admin tao là Nhật Tường có gì dùng lệnh ad hoặc adm để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mn") || (event.body.toLowerCase() == "tt đi mn")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "flop quá") || (event.body.toLowerCase() == "flop qua")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "con cac") || (event.body.toLowerCase() == "con cac")) {
    return api.sendMessage("️đâu đâu cởi ra xem nào ? không cởi dk à ? thế sau câm câm đi nhé", threadID);
  };

  if ((event.body.toLowerCase() == "cai lon") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️Mày bẩn vừa thôi con phò 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "clozz") || (event.body.toLowerCase() == "clozz")) {
    return api.sendMessage("️Mày bẩn vừa thôi ? tởm vãi 😼", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
    return api.sendMessage("️chửi ai đấy nhóc con ? bố mẹ mày k dạy dạy mày à ? thứ ngu học còn não chó nữa 🥲 thứ k có người dậy 😼", threadID);
  };

  if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
    return api.sendMessage("️Chửi gì đấy con đĩ bố mmày nhịn mày lâu lắm rồi đấy nhá muốn ăn vả k con tó 😼", threadID);
  };

  if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
    return api.sendMessage("️Chửi gì đấy con chó 😼 bố mmày nhịn mày lâu lắm rồi đấy nhá chửi con cặc nè thứ súc vật k bằng chó 😼", threadID);
  };

  if ((event.body.toLowerCase() == "cặc") || (event.body.toLowerCase() == "cặc")) {
    return api.sendMessage("️lớn rồi chửi bậy ít thôi nhé 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "Nhật Tường ") || (event.body.toLowerCase() == "ong Tường")) {
    return api.sendMessage("️Kêu chủ của tôi gì á :)?", threadID);
  };

  if ((event.body.toLowerCase() == "nhật Tường") || (event.body.toLowerCase() == "@Nhật Tường")) {
    return api.sendMessage("️Sao kêu ad có gì không vậy 💢", threadID);
  };

  if ((event.body.toLowerCase() == "bot dthw quá") || (event.body.toLowerCase() == "bot dthw qua")) {
    return api.sendMessage("️dạ hihi cảm ơn cậu ạ ♥️ cảm ơn vì đã khen mình nhé mình cảm ơn ♥️", threadID);
  };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "haha")) {
    return api.sendMessage("️Haha gì mà haha cười nhỏ thôi 🥲 cười to thế min sợ 🥲 nụ cười nguy hiểm gian sảo 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "kkk") || (event.body.toLowerCase() == "kkk")) {
    return api.sendMessage("️kkk cái gì đó 🥲 có gì vui không cho bot hóng với 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "con cặc") || (event.body.toLowerCase() == "con cặc")) {
    return api.sendMessage("️đâu show xem nào ? xem ciu to hay nhỏ 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "cái lồn") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️cả đời con gái có 1 cái thôi nên bớt lôi ra đi 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "lồn") || (event.body.toLowerCase() == "lồn")) {
    return api.sendMessage("️bạn ơi bạn bậy quá đi ạ 😌", threadID);
  };

  if ((event.body.toLowerCase() == "đm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("️sang chảnh lên chửi ít thôi 💢", threadID);
  };

  if ((event.body.toLowerCase() == "đm bot") || (event.body.toLowerCase() == "dm bot")) {
    return api.sendMessage("️Chửi cc gì đấy sủa lại bố mày nghe nào :) nít ranh mà cứ thích sồn :) loại dell có não đ chửi bot ? chả khác gì mi dell bằng tau ....? à thậm chí mi dell bằng con chó ý", threadID);
  };

  if ((event.body.toLowerCase() == "lozz") || (event.body.toLowerCase() == "lozz")) {
    return api.sendMessage("️bậy bạ quá dạ? 😌", threadID);
  };

  if ((event.body.toLowerCase() == "clmm") || (event.body.toLowerCase() == "clmm")) {
    return api.sendMessage("️Bớt chửi đi người ơi k ghiệ đó bạn ạ 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "ko ai thương t hết") || (event.body.toLowerCase() == "ko ai thuong t het")) {
    return api.sendMessage("️Thôi ngoan nào bot thương bạn mà <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu em không") || (event.body.toLowerCase() == "bot yeu em khong")) {
    return api.sendMessage("Hi, Bot yêu em hơn cả ny em cơ, yêu bot đi <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu admin bot không") || (event.body.toLowerCase() == "bot co yeu admin bot khong")) {
    return api.sendMessage("Có, yêu anh ấy nhất đừng hòng cướp của tôi", threadID);
  };

  if ((event.body.toLowerCase() == "bot có người yêu chưa") || (event.body.toLowerCase() == "bot co nguoi yeu chua")) {
    return api.sendMessage("Rồi ạ, là cậu đấy <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot im đi") || (event.body.toLowerCase() == "bot im di")) {
    return api.sendMessage("không bé ơi? no no và no ?", threadID);
  };

  if ((event.body.toLowerCase() == "bot cút đi") || (event.body.toLowerCase() == "bot cut di")) {
    return api.sendMessage("ủa đây là địa bàn của mình sao mình phải cút ? quê vậy tèng ơi", threadID);
  };

  if ((event.body.toLowerCase() == "bot chửi cái lon gì") || (event.body.toLowerCase() == "bot chui cai lon gi")) {
    return api.sendMessage("Chửi mày đấy, nhục vãi hahaha :>>, còn hỏi thứ quê  mày chửi tau trc đó con ạ 😼", threadID);
  };

  if ((event.body.toLowerCase() == "bot có buồn ko") || (event.body.toLowerCase() == "bot co buon ko")) {
    return api.sendMessage("Có mọi người sao bé buồn đc <3 yêu lắm <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu t ko") || (event.body.toLowerCase() == "bot co yeu t ko")) {
    return api.sendMessage("Dạ có yêu cậu và mọi người nhiều lắm", threadID);
  };

  if ((event.body.toLowerCase() == "bot đi ngủ đi") || (event.body.toLowerCase() == "bot di ngu di")) {
    return api.sendMessage("Tớ là bot, cậu là người nên cần đi ngủ nè ♥️", threadID);
  };

  if ((event.body.toLowerCase() == "bot ăn cơm chưa") || (event.body.toLowerCase() == "bot an com chua")) {
    return api.sendMessage("Mình  nhìn cậu ăn là thấy no rồi ♥️", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương tui ko") || (event.body.toLowerCase() == "bot co thuong tui ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương t ko") || (event.body.toLowerCase() == "bot co thuong t ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot làm thơ đi") ||  (event.body.toLowerCase() == "bot lam tho di")) {
    return api.sendMessage("Yêu cậu như một cực hình\nCậu mà có bồ trc tớ cậu ăn cuk", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot lon") ||  (event.body.toLowerCase() == "clmm bot lon")) {
    return api.sendMessage("Mày chửi gì đấy nói rõ lên bố mày nghe lại xem nào :))", threadID);
  };

  if ((event.body.toLowerCase() == "cc") ||  (event.body.toLowerCase() == "cc")) {
    return api.sendMessage("ôi bạn ơi 🤣, bạn không biết sang à 🤣 có ngày ghiệp quật cho 🤣", threadID);
  };  

  if ((event.body.toLowerCase() == "bot ngu")) {
    return api.sendMessage("mi ngu ý tự nhiên chửi tau?", threadID);
  };

  if ((event.body.toLowerCase() == "bot out")) {
    return api.sendMessage("không bé ơi😌", threadID);
  };

   if ((event.body.toLowerCase() == "bot cút")) {
    return api.sendMessage("không bé ơi bé cút TRC đi nè 😌", threadID);
  };

  if ((event.body.toLowerCase() == "bot lon")) {
    return api.sendMessage("mình là bot nhé?? Bạn xàm quá....!?", threadID);
  };

  if ((event.body.toLowerCase() == "bot óc chó")) {
    return api.sendMessage("á à con chó này nói xấu bố à mấy dạy🥲", threadID);
  };

  if ((event.body.toLowerCase() == "bot chó") || (event.body.toLowerCase() == "bot chó")) {
    return api.sendMessage("đĩ nào vừa chửi tau vậy 😼", threadID);
  };

if ((event.body.toLowerCase() == "hí hí") ||  (event.body.toLowerCase() == "hihi")) {
    return api.sendMessage("nay bae của tui có việc gì vui dạ 🥰 kể bé ghe đi 💢", threadID);
  };

  if ((event.body.toLowerCase() == "ukm") ||  (event.body.toLowerCase() == "ukm")) {
    return api.sendMessage("nào ừm câi giề 🥲 nay bae k ngoan rồi kìa 🥲 ", threadID);
  };

if ((event.body.toLowerCase() == "🥲") ||  (event.body.toLowerCase() == "😞")) {
    return api.sendMessage("Icon dễ thương ha, tặng cậu cái bcs sài cho dui nè :33 ", threadID);
  };
  
if ((event.body.toLowerCase() == "quê @") ||  (event.body.toLowerCase() == "quê")) {
    return api.sendMessage("ôi con sông quê🥲 bạn thật là quê mùa 🥲", threadID);
  };

if ((event.body.toLowerCase() == "vg") ||  (event.body.toLowerCase() == "vâg")) {
    return api.sendMessage("úi Ny của bot nay ngoan ngoãn thế ta ơi 🥰🥰♥️", threadID);
  };
  
  if ((event.body.toLowerCase() == "ôi") || (event.body.toLowerCase() == "ôi")) {
    return api.sendMessage("Ôi gì á bae? Tương tác đi tí boss cho Ny 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "dỗi") || (event.body.toLowerCase() == "boss dỗi")) {
    return api.sendMessage("Bé ơi ngoan nào không dỗi nữa ngoan bae thương nà moadhhhh~~~~~♥️", threadID);
  };

  if ((event.body.toLowerCase() == "boss ơi") || (event.body.toLowerCase() == "boss")) {
    return api.sendMessage(" Boss cute phô mai con bò cười hế hế xứng đáng có 100 Ny:<", threadID);
  };

  if ((event.body.toLowerCase() == "bsvv") || (event.body.toLowerCase() == "bsvv mn")) {
    return api.sendMessage("Bạn cũng thế nhé...ngày mới tốt lành ^^", threadID);
  };

  if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == ":))) ")) {
    return api.sendMessage(" icon của sự thỉu năng 😼", threadID);
  };
  
  if ((event.body.toLowerCase() == "🥺🥺") || (event.body.toLowerCase() == "🥺")) {
    return api.sendMessage("Thôi nín nín admin cho Ny nè ♥️", threadID);
  };
  
  if ((event.body.toLowerCase() == "ối") || (event.body.toLowerCase() == "ối")) {
    return api.sendMessage("ối gì thế tương tác mạnh lên nha ♥️", threadID);
  };

  if ((event.body.toLowerCase() == "ơi") || (event.body.toLowerCase() == "ơi")) {
    return api.sendMessage("ơi gì vậy tèng ơi tương tác đê 🤣 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "ỏ") || (event.body.toLowerCase() == "oi")) {
    return api.sendMessage("Ỏ gì vậy? Thích ỏ không -..-", threadID);
  };

  if ((event.body.toLowerCase() == "ừm") || (event.body.toLowerCase() == "um")) {
    return api.sendMessage("Ừm gì 🥲 tương tác đi 😌", threadID);
  };
 
  if ((event.body.toLowerCase() == "admin ") || (event.body.toLowerCase() == "admin")) {
    return api.sendMessage("gọi admin của bót có việc gì vậy? muốn yêu admin của bót à hihi♥️😼 :)?", threadID);
  };

  if ((event.body.toLowerCase() == "mèo gâu") || (event.body.toLowerCase() == "mèo gau")) {
    return api.sendMessage("mèo gâu cái dịt mẹ nhá mèo củ lồn kêu con cẹc🙂😼 bà câm mẹ mồm đi thứ chó🙂😼😼 :)?", threadID);
  };
  
  if ((event.body.toLowerCase() == "à") || (event.body.toLowerCase() == "à")) {
    return api.sendMessage("À gì tương tác lẹ đi tí boss cho bim bim🥺 :)?", threadID);
  };

  if ((event.body.toLowerCase() == "ừ") || (event.body.toLowerCase() == "u")) {
    return api.sendMessage("ừ cơ á .....! Dạ đi tí bot kiếm ny cute cho =)", threadID);
  };

  if ((event.body.toLowerCase() == "ừa") || (event.body.toLowerCase() == "ua")) {
    return api.sendMessage("Ừa cơ đấy chả ngoan tí nào cả🥲 dạ đi mới là bé ngoan <<<<<< 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "uk") || (event.body.toLowerCase() == "uk")) {
    return api.sendMessage("uk á giỏi nhề nay bật nóc nhà cơ đấy giỏi quá rồi còn😌", threadID);
  };

  if ((event.body.toLowerCase() == "dạ") || (event.body.toLowerCase() == "da")) {
    return api.sendMessage("Ngoan đấy tặng cậu 1 bạn Ny cute dễ thương ngoan nữa nè ahihihi", threadID);
  };

  if ((event.body.toLowerCase() == "yêu") || (event.body.toLowerCase() == "yeu")) {
    return api.sendMessage("Yêu với đương, tiền, xe, nhà thì không có mà yêu với đương, lo học hành và đi làm kiếm tiền sau cả yêu không làm khổ con nhà người ta ra", threadID);
  };

  if ((event.body.toLowerCase() == "đmm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("nào k nên nói bậy phải sang lên hỉu chưa ?", threadID);
  };

  if ((event.body.toLowerCase() == "đmm bot") || (event.body.toLowerCase() == "dmm bot")) {
    return api.sendMessage("chửi ai đấy ? Chửi bót à vậy mà bảo yêu thương mình😌 hỏng rồi còn 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cmm") || (event.body.toLowerCase() == "chui cmm")) {
    return api.sendMessage("nào ai dậy bạn chửi tớ vậy 🥲 bạn k bt yêu thương mình à 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "cmm bot") || (event.body.toLowerCase() == "cmm bot")) {
    return api.sendMessage("nào ai dậy bạn chửi tớ vậy 🥲 bạn k bt yêu thương mình à 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "địt") || (event.body.toLowerCase() == "dit")) {
    return api.sendMessage("dâm quá má ơi -..-", threadID);
  };

  if ((event.body.toLowerCase() == "địt cc") || (event.body.toLowerCase() == "dit cc")) {
    return api.sendMessage("bậy bạ quá trời ơi :((((((", threadID);
  };

  if ((event.body.toLowerCase() == "bot ơi") ||  (event.body.toLowerCase() == "bot ơi")) {
    return api.sendMessage("nói đi, ạ mình còn phải đi làm việc cho admin ạ nói nhanh đi ạ 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "yêu bot") || (event.body.toLowerCase() == "yeu bot")) {
    return api.sendMessage("Hmm... Bot ngại lắm thôi yêu admin cute của bót đi ạ 🤣", threadID);
  };

   if ((event.body.toLowerCase() == "yêu anh") || (event.body.toLowerCase() == "yeu anh")) {
    return api.sendMessage("Anh cũng yêu em <3", threadID);
  };

  if ((event.body.toLowerCase() == "em") || (event.body.toLowerCase() == "em ơi")) {
    return api.sendMessage("Em ơi đừng sầu em ơi đừng buồn em ơi đừng tin những lời người ta mấy ai thật thà Yêu em nữa đâu🖤", threadID);
  };

  if ((event.body.toLowerCase() == "ghét") || (event.body.toLowerCase() == "ghet")) {
    return api.sendMessage("Ghét bot à dỗi =(((", threadID);
  };
if ((event.body.toLowerCase() == "hí") || (event.body.toLowerCase() == "hi")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };
  if ((event.body.toLowerCase() == "hí") || (event.body.toLowerCase() == "hi")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };
 
  if ((event.body.toLowerCase() == "công nhân") || (event.body.toLowerCase() == "thằng công nhân ")) {
    return api.sendMessage("Thằng công nhân sao giám mua cân thịt☺️", threadID);
  };

    if ((event.body.toLowerCase() == "nhà ghèo") || (event.body.toLowerCase() == "thằng nhà ghèo")) {
    return api.sendMessage("Thằng nhà ghèo sao giám thịt con nhà người ta🙂🖤💔", threadID);
  };

  if ((event.body.toLowerCase() == "chào") || (event.body.toLowerCase() == "chào")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hi mn") || (event.body.toLowerCase() == "hi mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hi mn") || (event.body.toLowerCase() == "hi mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "ad ") || (event.body.toLowerCase() == " ad")) {
    return api.sendMessage("admin rất đẹp trai :))) và đang ế", threadID);
  };

  if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "hello")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

 if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "btvv nha mng") || (event.body.toLowerCase() == "btvv")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một buổi tối tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hí ae") || (event.body.toLowerCase() == "hi ae")) {
    return api.sendMessage("quẩy nào ....... Quẩy lên aeeeeee ơi hú hú hú ", threadID);
  };

  if ((event.body.toLowerCase() == "hiii") || (event.body.toLowerCase() == "hiii")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "btvv nha mn") || (event.body.toLowerCase() == "btvv nha mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "chào cậu") || (event.body.toLowerCase() == "chao cau")) {
    return api.sendMessage("Hí chào bạn <3", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cc") || (event.body.toLowerCase() == "chui cc")) {
    return api.sendMessage("️Matday quá đi trời thật là hư đốn 🥲 ", threadID);
  };


  if ((event.body.toLowerCase() == "cc cút") || (event.body.toLowerCase() == "cc cút")) {
    return api.sendMessage("ơ nào ai làm gì mà bảo cút buồn cười ghê 🤣 ", threadID);
  };

  if ((event.body.toLowerCase() == "vãi") || (event.body.toLowerCase() == "vai")) {
    return api.sendMessage("Vãi chuối ạ 🤣....:)))", threadID);
  };

  if ((event.body.toLowerCase() == "Alo") || (event.body.toLowerCase() == "alo")) {
    return api.sendMessage("alo gì dạ? Yêu mình k nè hihihi", threadID);
  };

  if ((event.body.toLowerCase() == "Aloo") || (event.body.toLowerCase() == "aloo")) {
    return api.sendMessage("alo lại nè heeeeee tương tác đi", threadID);
  };

  if ((event.body.toLowerCase() == "cứu") || (event.body.toLowerCase() == "cuu")) {
    return api.sendMessage("Cứu cc ngu thì chết khôn thì sống cậu chủ bảo tao thế <3", threadID);
  };

  if ((event.body.toLowerCase() == "gây war à") || (event.body.toLowerCase() == "gay war a")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };

  if ((event.body.toLowerCase() == "đi gây war") || (event.body.toLowerCase() == "di gay war")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };

  if ((event.body.toLowerCase() == "thích gây war à") || (event.body.toLowerCase() == "thich gay war a")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };  

  if ((event.body.toLowerCase() == "hát đi mng") || (event.body.toLowerCase() == "hat di mng")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi") || (event.body.toLowerCase() == "hat di")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };  

  if ((event.body.toLowerCase() == "bot hát đi") || (event.body.toLowerCase() == "bot hat di")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi nào") || (event.body.toLowerCase() == "hát đi nào")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi bot") || (event.body.toLowerCase() == "hat di bot")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mng") || (event.body.toLowerCase() == "tt đi mng")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi nào mng") || (event.body.toLowerCase() == "tt di nao mng")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt mng ơi") || (event.body.toLowerCase() == "tt mng oi")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
    return api.sendMessage("️Ngủ ngon ạ <3 Chúc mọi người mơ siêu đẹp <3", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai v bot") || (event.body.toLowerCase() == "admin m la ai v bot")) {
    return api.sendMessage("️Admin tao là Nhật Tường có gì dùng lệnh ad hoặc adm để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai vậy bot") || (event.body.toLowerCase() == "admin m la ai vậy bot")) {
    return api.sendMessage("️Admin tao là Nhật Tường có gì dùng lệnh ad hoặc adm để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mn") || (event.body.toLowerCase() == "tt đi mn")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "flop quá") || (event.body.toLowerCase() == "flop qua")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "con cac") || (event.body.toLowerCase() == "con cac")) {
    return api.sendMessage("️đâu đâu cởi ra xem nào ? không cởi dk à ? thế sau câm câm đi nhé", threadID);
  };

  if ((event.body.toLowerCase() == "cai lon") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️Mày bẩn vừa thôi con phò 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "clozz") || (event.body.toLowerCase() == "clozz")) {
    return api.sendMessage("️Mày bẩn vừa thôi ? tởm vãi 😼", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
    return api.sendMessage("️chửi ai đấy nhóc con ? bố mẹ mày k dạy dạy mày à ? thứ ngu học còn não chó nữa 🥲 thứ k có người dậy 😼", threadID);
  };

  if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
    return api.sendMessage("️Chửi gì đấy con đĩ bố mmày nhịn mày lâu lắm rồi đấy nhá muốn ăn vả k con tó 😼", threadID);
  };

  if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
    return api.sendMessage("️Chửi gì đấy con chó 😼 bố mmày nhịn mày lâu lắm rồi đấy nhá chửi con cặc nè thứ súc vật k bằng chó 😼", threadID);
  };

  if ((event.body.toLowerCase() == "cặc") || (event.body.toLowerCase() == "cặc")) {
    return api.sendMessage("️lớn rồi chửi bậy ít thôi nhé 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "Nhật Tường ") || (event.body.toLowerCase() == "ong Tường")) {
    return api.sendMessage("️Kêu chủ của tôi gì á :)?", threadID);
  };

  if ((event.body.toLowerCase() == "nhật Tường") || (event.body.toLowerCase() == "@Nhật Tường")) {
    return api.sendMessage("️Sao kêu ad có gì không vậy 💢", threadID);
  };

  if ((event.body.toLowerCase() == "bot dthw quá") || (event.body.toLowerCase() == "bot dthw qua")) {
    return api.sendMessage("️dạ hihi cảm ơn cậu ạ ♥️ cảm ơn vì đã khen mình nhé mình cảm ơn ♥️", threadID);
  };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "haha")) {
    return api.sendMessage("️Haha gì mà haha cười nhỏ thôi 🥲 cười to thế min sợ 🥲 nụ cười nguy hiểm gian sảo 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "kkk") || (event.body.toLowerCase() == "kkk")) {
    return api.sendMessage("️kkk cái gì đó 🥲 có gì vui không cho bot hóng với 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "con cặc") || (event.body.toLowerCase() == "con cặc")) {
    return api.sendMessage("️đâu show xem nào ? xem ciu to hay nhỏ 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "cái lồn") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️cả đời con gái có 1 cái thôi nên bớt lôi ra đi 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "lồn") || (event.body.toLowerCase() == "lồn")) {
    return api.sendMessage("️bạn ơi bạn bậy quá đi ạ 😌", threadID);
  };

  if ((event.body.toLowerCase() == "đm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("️sang chảnh lên chửi ít thôi 💢", threadID);
  };

  if ((event.body.toLowerCase() == "đm bot") || (event.body.toLowerCase() == "dm bot")) {
    return api.sendMessage("️Chửi cc gì đấy sủa lại bố mày nghe nào :) nít ranh mà cứ thích sồn :) loại dell có não đ chửi bot ? chả khác gì mi dell bằng tau ....? à thậm chí mi dell bằng con chó ý", threadID);
  };

  if ((event.body.toLowerCase() == "lozz") || (event.body.toLowerCase() == "lozz")) {
    return api.sendMessage("️bậy bạ quá dạ? 😌", threadID);
  };

  if ((event.body.toLowerCase() == "clmm") || (event.body.toLowerCase() == "clmm")) {
    return api.sendMessage("️Bớt chửi đi người ơi k ghiệ đó bạn ạ 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "ko ai thương t hết") || (event.body.toLowerCase() == "ko ai thuong t het")) {
    return api.sendMessage("️Thôi ngoan nào bot thương bạn mà <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu em không") || (event.body.toLowerCase() == "bot yeu em khong")) {
    return api.sendMessage("Hi, Bot yêu em hơn cả ny em cơ, yêu bot đi <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu admin bot không") || (event.body.toLowerCase() == "bot co yeu admin bot khong")) {
    return api.sendMessage("Có, yêu anh ấy nhất đừng hòng cướp của tôi", threadID);
  };

  if ((event.body.toLowerCase() == "bot có người yêu chưa") || (event.body.toLowerCase() == "bot co nguoi yeu chua")) {
    return api.sendMessage("Rồi ạ, là cậu đấy <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot im đi") || (event.body.toLowerCase() == "bot im di")) {
    return api.sendMessage("không bé ơi? no no và no ?", threadID);
  };

  if ((event.body.toLowerCase() == "bot cút đi") || (event.body.toLowerCase() == "bot cut di")) {
    return api.sendMessage("ủa đây là địa bàn của mình sao mình phải cút ? quê vậy tèng ơi", threadID);
  };

  if ((event.body.toLowerCase() == "bot chửi cái lon gì") || (event.body.toLowerCase() == "bot chui cai lon gi")) {
    return api.sendMessage("Chửi mày đấy, nhục vãi hahaha :>>, còn hỏi thứ quê  mày chửi tau trc đó con ạ 😼", threadID);
  };

  if ((event.body.toLowerCase() == "bot có buồn ko") || (event.body.toLowerCase() == "bot co buon ko")) {
    return api.sendMessage("Có mọi người sao bé buồn đc <3 yêu lắm <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu t ko") || (event.body.toLowerCase() == "bot co yeu t ko")) {
    return api.sendMessage("Dạ có yêu cậu và mọi người nhiều lắm", threadID);
  };

  if ((event.body.toLowerCase() == "bot đi ngủ đi") || (event.body.toLowerCase() == "bot di ngu di")) {
    return api.sendMessage("Tớ là bot, cậu là người nên cần đi ngủ nè ♥️", threadID);
  };

  if ((event.body.toLowerCase() == "bot ăn cơm chưa") || (event.body.toLowerCase() == "bot an com chua")) {
    return api.sendMessage("Mình  nhìn cậu ăn là thấy no rồi ♥️", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương tui ko") || (event.body.toLowerCase() == "bot co thuong tui ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương t ko") || (event.body.toLowerCase() == "bot co thuong t ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot làm thơ đi") ||  (event.body.toLowerCase() == "bot lam tho di")) {
    return api.sendMessage("Yêu cậu như một cực hình\nCậu mà có bồ trc tớ cậu ăn cuk", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot lon") ||  (event.body.toLowerCase() == "clmm bot lon")) {
    return api.sendMessage("Mày chửi gì đấy nói rõ lên bố mày nghe lại xem nào :))", threadID);
  };

  if ((event.body.toLowerCase() == "cc") ||  (event.body.toLowerCase() == "cc")) {
    return api.sendMessage("ôi bạn ơi 🤣, bạn không biết sang à 🤣 có ngày ghiệp quật cho 🤣", threadID);
  };

if ((event.body.toLowerCase() == "✅") || (event.body.toLowerCase() == "✅")) {
    return api.sendMessage("❎", threadID);
  };

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }