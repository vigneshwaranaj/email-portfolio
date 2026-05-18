// Multi-language translations
const translations = {
	en: {
		org: "CHARITY",
		header: "Support Our Cause",
		subheader: "Your generous donation helps us make a real difference in the lives of those who need it most. Join thousands of supporters making a positive impact today.",
		impact: "Our Impact",
		impact_desc: "See how your donation creates meaningful change in our community.",
		donate_now: "DONATE NOW",
		about_title: "About Our Organization",
		about_content: "We are a nonprofit organization dedicated to creating lasting change through education, healthcare, and community development. With your support, we continue to serve vulnerable populations and build a better tomorrow for all.",
		contact_email: "help@donation.org",
		contact_phone: "(541) 754-3010",
		contact_address1: "New York, 222 West 23rd",
		contact_address2: "Paris, Champ de Mars 54",
		footer: "Copyright © 2026 Charity Foundation. All rights reserved.",
		goal_heading: "Campaign Goals"
	},
	es: {
		org: "CARIDAD",
		header: "Apoya Nuestra Causa",
		subheader: "Tu generosa donación nos ayuda a marcar una verdadera diferencia en la vida de quienes más lo necesitan. Únete a miles de simpatizantes que generan un impacto positivo hoy.",
		impact: "Nuestro Impacto",
		impact_desc: "Mira cómo tu donación crea cambios significativos en nuestra comunidad.",
		donate_now: "DONAR AHORA",
		about_title: "Acerca de Nuestra Organización",
		about_content: "Somos una organización sin fines de lucro dedicada a crear cambios duraderos mediante educación, atención médica y desarrollo comunitario. Con tu apoyo, continuamos sirviendo a poblaciones vulnerables y construir un futuro mejor para todos.",
		contact_email: "ayuda@donacion.org",
		contact_phone: "(541) 754-3010",
		contact_address1: "Nueva York, 222 West 23rd",
		contact_address2: "París, Champ de Mars 54",
		footer: "Copyright © 2026 Fundación Caridad. Todos los derechos reservados.",
		goal_heading: "Objetivos de la Campaña"
	},
	fr: {
		org: "CHARITÉ",
		header: "Soutenir Notre Cause",
		subheader: "Votre généreux don nous aide à faire une vraie différence dans la vie de ceux qui en ont le plus besoin. Rejoignez des milliers de supporters créant un impact positif aujourd'hui.",
		impact: "Notre Impact",
		impact_desc: "Découvrez comment votre don crée des changements significatifs dans notre communauté.",
		donate_now: "DONNER MAINTENANT",
		about_title: "À Propos de Notre Organisation",
		about_content: "Nous sommes une organisation à but non lucratif dédiée à créer un changement durable par l'éducation, les soins de santé et le développement communautaire. Avec votre soutien, nous continuons à servir les populations vulnérables et à construire un meilleur avenir pour tous.",
		contact_email: "aide@donation.fr",
		contact_phone: "(541) 754-3010",
		contact_address1: "New York, 222 West 23rd",
		contact_address2: "Paris, Champ de Mars 54",
		footer: "Copyright © 2026 Fondation Charité. Tous les droits réservés.",
		goal_heading: "Objectifs de la Campagne"
	},
	de: {
		org: "WOHLTÄTIGKEIT",
		header: "Unterstützen Sie Unsere Sache",
		subheader: "Ihre großzügige Spende hilft uns, echte Veränderungen im Leben derjenigen zu bewirken, die sie am meisten brauchen. Schließen Sie sich Tausenden von Unterstützern an, die heute positive Auswirkungen erzeugen.",
		impact: "Unser Einfluss",
		impact_desc: "Sehen Sie, wie Ihre Spende bedeutsame Veränderungen in unserer Gemeinde schafft.",
		donate_now: "JETZT SPENDEN",
		about_title: "Über Unsere Organisation",
		about_content: "Wir sind eine gemeinnützige Organisation, die sich dem Schaffen dauerhafter Veränderungen durch Bildung, Gesundheitswesen und Gemeindeentwicklung widmet. Mit Ihrer Unterstützung helfen wir weiterhin gefährdeten Bevölkerungsgruppen und schaffen eine bessere Zukunft für alle.",
		contact_email: "hilfe@spende.de",
		contact_phone: "(541) 754-3010",
		contact_address1: "New York, 222 West 23rd",
		contact_address2: "Paris, Champ de Mars 54",
		footer: "Copyright © 2026 Wohltätigkeitsstiftung. Alle Rechte vorbehalten.",
		goal_heading: "Kampagnenziele"
	},
	zh: {
		org: "慈善",
		header: "支持我们的事业",
		subheader: "您的慷慨捐赠帮助我们为最需要帮助的人的生活带来真正的改变。加入成千上万的支持者，今天创造积极影响。",
		impact: "我们的影响",
		impact_desc: "了解您的捐款如何在我们的社区中创造有意义的变革。",
		donate_now: "立即捐赠",
		about_title: "关于我们的组织",
		about_content: "我们是一个致力于通过教育、医疗保健和社区发展创造持久变革的非营利组织。有了您的支持，我们继续为弱势群体服务，并为所有人建立更美好的未来。",
		contact_email: "help@donation.cn",
		contact_phone: "(541) 754-3010",
		contact_address1: "纽约，222 West 23rd",
		contact_address2: "巴黎，Champ de Mars 54",
		footer: "版权所有 © 2026 慈善基金会。保留所有权利。",
		goal_heading: "活动目标"
	}
};

let currentLang = 'en';

function changeLanguage(lang) {
	currentLang = lang;
	const trans = translations[lang];
	
	// Update all text elements
	document.getElementById('org-name').textContent = trans.org;
	document.getElementById('hero-title').textContent = trans.header;
	document.getElementById('hero-content').textContent = trans.subheader;
	document.getElementById('impact-title').textContent = trans.impact;
	document.getElementById('impact-desc').textContent = trans.impact_desc;
	document.getElementById('donate-button-text').textContent = trans.donate_now;
	document.getElementById('about-title').textContent = trans.about_title;
	document.getElementById('about-content').textContent = trans.about_content;
	document.getElementById('contact-email').textContent = trans.contact_email;
	document.getElementById('contact-phone').textContent = trans.contact_phone;
	document.getElementById('address1').textContent = trans.contact_address1;
	document.getElementById('address2').textContent = trans.contact_address2;
	document.getElementById('footer-text').textContent = trans.footer;
	document.getElementById('goal-heading').textContent = trans.goal_heading;
	
	// Store preference
	localStorage.setItem('preferredLanguage', lang);
}

window.addEventListener('load', function() {
	const savedLang = localStorage.getItem('preferredLanguage') || 'en';
	changeLanguage(savedLang);
});
