// Enhanced Knowledge Base with Conversational Responses
const businessKnowledge = {
    marketing: {
        keywords: ['marketing', 'market', 'customer needs', 'consumer', 'selling', 'advertising', 'promotion'],
        
        simple: {
            response: "Great question! So, marketing is basically how businesses figure out what people want and then convince them to buy it. Think of it like this - imagine you're throwing a party. Marketing is finding out what music your friends like, what snacks they prefer, and then making sure they know about your awesome party!",
            followUp: "It's more than just selling stuff - it's about understanding people. Want me to break down the different parts of marketing, or explain how companies actually use it?"
        },
        
        detailed: {
            response: "Let me dive deeper into marketing for you! \n\nMarketing is really a whole process that businesses use. Here's how it works:\n\n**Understanding Customers:** First, companies do research to figure out what people actually want. Like, Netflix watches what shows you binge to recommend more stuff you'll love.\n\n**Market Segmentation:** Then they divide customers into groups. For example, Apple targets tech-savvy people who value design, not everyone.\n\n**The Marketing Mix (4Ps):** This is the fun part!\n- **Product:** What you're selling (iPhone's features)\n- **Price:** How much it costs (premium pricing strategy)\n- **Place:** Where you sell it (Apple Stores, online)\n- **Promotion:** How you advertise it (those sleek commercials)\n\n**Goals:** Companies want things like more sales, brand loyalty, and happy customers.\n\nDoes this make sense? Want a real-world example or more details on any specific part?",
            followUp: "I can explain market segmentation in detail, talk about the 4Ps with examples, or show you how a company like Coca-Cola uses marketing. What interests you?"
        },
        
        example: {
            response: "Let me give you a real example! \n\nTake **Apple** - they're marketing masters:\n\n**Research:** They noticed people wanted phones that were simple and beautiful, not complicated.\n\n**Segmentation:** They target premium customers who value design over low prices.\n\n**Product:** iPhones with sleek design and easy-to-use interface.\n\n**Price:** High prices (£999+) to signal quality and exclusivity.\n\n**Place:** Fancy Apple Stores with minimalist design, plus their website.\n\n**Promotion:** Simple ads that focus on emotion and design, not technical specs.\n\n**Result:** People camp outside stores for new iPhones! That's successful marketing.\n\nSee how all the pieces work together? Want another example or should we explore a different topic?",
            followUp: "I can compare Apple's strategy with a different company, or we can move to another business topic. Your call!"
        }
    },

    segmentation: {
        keywords: ['segmentation', 'market segmentation', 'target market', 'demographics', 'customer groups', 'divide market'],
        
        simple: {
            response: "Market segmentation is like organizing your friends into groups! You wouldn't invite your gaming friends to a book club, right? \n\nBusinesses do the same thing - they split customers into groups based on things like age, interests, or how much money they have. Then they market differently to each group. Makes sense?",
            followUp: "Want to know the different ways companies group customers, or see some real examples?"
        },
        
        detailed: {
            response: "Okay, let me explain market segmentation properly!\n\nImagine you're selling sneakers. You can't market the same way to everyone, so you divide customers:\n\n**Demographic:** Age, gender, income\n- Example: Kids want trendy colors, adults want comfort\n\n**Geographic:** Where they live\n- Example: Warm countries need light shoes, cold countries need insulated ones\n\n**Psychographic:** Lifestyle and values\n- Example: Athletes want performance, fashion lovers want style\n\n**Behavioral:** Shopping habits\n- Example: Loyal customers get discounts, new customers get welcome offers\n\nNike does this brilliantly - they have different lines for basketball players, runners, and casual wearers. Each group gets targeted ads that speak to THEIR needs.\n\nMake sense? Want real examples or more detail on any type?",
            followUp: "I can show you how a specific company uses segmentation, or explain why it's so important. What would help you most?"
        },
        
        example: {
            response: "Here's a perfect example - **Netflix**!\n\nThey segment like crazy:\n\n**Demographics:** \n- Kids get animated shows\n- Teens get teen dramas\n- Adults get serious content\n\n**Behavioral:**\n- If you watch crime shows, they recommend more crime\n- Binge-watchers get whole seasons at once\n\n**Geographic:**\n- UK gets British shows promoted\n- India gets Bollywood content\n\n**Result:** Your Netflix homepage looks COMPLETELY different from your friend's! That's segmentation working perfectly - everyone feels like Netflix was made just for them.\n\nPretty clever, right? Want to explore how this helps businesses make more money?",
            followUp: "I can explain the benefits of segmentation, or we can jump to another business concept. You choose!"
        }
    },

    breakeven: {
        keywords: ['break even', 'breakeven', 'break-even', 'fixed costs', 'variable costs', 'profit'],
        
        simple: {
            response: "Break-even is super simple - it's the point where a business stops losing money and hasn't made profit yet. Like if you sell lemonade for £1 and it costs you £1 to make, you break even!\n\nBusinesses need to know this number so they know how many sales they need just to survive.",
            followUp: "Want me to explain the math behind it, or show you a real example with numbers?"
        },
        
        detailed: {
            response: "Let me break down break-even analysis for you!\n\n**The Concept:** It's finding out how many products you need to sell before you stop losing money.\n\n**The Costs:**\n- **Fixed Costs:** Stuff you pay no matter what (rent, salaries) - let's say £10,000\n- **Variable Costs:** Costs per item (materials, packaging) - say £5 per item\n- **Selling Price:** What customers pay - say £15 per item\n\n**The Math:**\nBreak-even = Fixed Costs ÷ (Selling Price - Variable Cost)\n= £10,000 ÷ (£15 - £5)\n= £10,000 ÷ £10\n= **1,000 units**\n\nSo you need to sell 1,000 items to break even. Sell 1,001? You're making profit!\n\n**Why It Matters:** \n- Helps set realistic sales targets\n- Shows if your prices are too low\n- Tells you if your business idea is viable\n\nWant me to work through another example with different numbers?",
            followUp: "I can show you how lowering costs or raising prices affects break-even, or we can move to another topic. What works for you?"
        },
        
        example: {
            response: "Let's use a real example - imagine you're starting a **small bakery**:\n\n**Fixed Costs (monthly):**\n- Rent: £2,000\n- Equipment: £500\n- Salaries: £3,000\n- **Total: £5,500**\n\n**Per Cake:**\n- Variable Cost: £3 (flour, eggs, etc.)\n- Selling Price: £8\n- Contribution: £8 - £3 = **£5 profit per cake**\n\n**Break-even:**\n£5,500 ÷ £5 = **1,100 cakes per month**\n\nThat's about 37 cakes per day! \n\n**Real Insight:** If you can't sell 37 cakes daily, you'll lose money. But if you sell 40 cakes a day, those extra 3 cakes = £15 daily profit = £450/month pure profit!\n\nSee how powerful this is for planning? Want to explore ways to lower the break-even point?",
            followUp: "I can explain strategies to reduce break-even, or we can tackle a different business concept. You decide!"
        }
    },

    cashflow: {
        keywords: ['cash flow', 'cashflow', 'working capital', 'liquidity', 'cash', 'money coming in'],
        
        simple: {
            response: "Cash flow is literally the money flowing in and out of your business. Think of it like your personal bank account - money comes in from your job (inflows), money goes out for rent and food (outflows).\n\nBusinesses can be profitable but still run out of cash if customers pay late! That's why cash flow is crucial.",
            followUp: "Want to understand why profitable businesses can still fail due to cash flow? Or see a real example?"
        },
        
        detailed: {
            response: "Let me explain cash flow properly - it's actually different from profit!\n\n**Cash Inflows (money coming in):**\n- Customer payments\n- Loans\n- Investments\n\n**Cash Outflows (money going out):**\n- Supplier payments\n- Salaries\n- Rent\n- Bills\n\n**The Problem:** Imagine you sell something for £1,000 profit, but the customer pays in 60 days. Meanwhile, you need to pay your suppliers in 30 days. You're profitable but have no cash - that's a cash flow crisis!\n\n**Solutions:**\n- Demand faster payments from customers\n- Negotiate longer payment terms with suppliers\n- Keep a cash reserve\n- Get a bank overdraft\n\nEven huge companies like **Carillion** went bankrupt because of cash flow problems, even though they had contracts worth millions!\n\nMake sense? Want a worked example with numbers?",
            followUp: "I can show you how to calculate cash flow, or explain how businesses manage it. What interests you more?"
        },
        
        example: {
            response: "Here's a real-world scenario:\n\n**January - Your Small Business:**\n\nYou sell £10,000 of products (profit £3,000) - looks great!\n\nBUT:\n- Customers pay in 60 days (so you get £0 in January)\n- You must pay suppliers £5,000 NOW\n- Salaries £2,000 NOW\n- Rent £1,000 NOW\n\n**Cash Flow:**\n- Inflow: £0\n- Outflow: £8,000\n- **You're £8,000 short!**\n\nYou're profitable on paper, but you can't pay your bills! This is why businesses fail.\n\n**Solution:** Get a £10,000 overdraft, or demand 50% upfront from customers.\n\n**Real Example:** Toys R Us went bankrupt partly due to cash flow - they had to pay suppliers before selling toys, especially before Christmas. When sales were slower than expected, they ran out of cash despite owning valuable inventory.\n\nSee why cash is king? Want to explore cash flow management strategies?",
            followUp: "I can explain forecasting cash flow, or we can move to another business topic. Your pick!"
        }
    },

    motivation: {
        keywords: ['motivation', 'employee motivation', 'motivate', 'workforce', 'morale', 'herzberg', 'maslow'],
        
        simple: {
            response: "Employee motivation is about getting people excited to work hard! It's not just about money - sometimes recognition, career growth, or even free coffee can motivate people more than a small pay rise.\n\nHappy employees = better work = more profit. Simple!",
            followUp: "Want to learn about the famous theories (Maslow, Herzberg) or see how real companies motivate employees?"
        },
        
        detailed: {
            response: "Let me explain employee motivation theories - this is actually fascinating!\n\n**Maslow's Hierarchy of Needs:**\nPeople have levels of needs:\n1. **Basic:** Food, shelter (pay enough to live)\n2. **Safety:** Job security, safe workplace\n3. **Social:** Team belonging, friendships\n4. **Esteem:** Recognition, promotions\n5. **Self-actualization:** Challenging work, creativity\n\nYou can't motivate with level 5 stuff if level 1 isn't met!\n\n**Herzberg's Two-Factor Theory:**\n- **Hygiene Factors:** Don't motivate, but demotivate if missing (decent pay, good conditions)\n- **Motivators:** Actually drive performance (recognition, responsibility, achievement)\n\n**Real Insight:** Giving someone a 2% raise (hygiene) won't make them work harder. But giving them an exciting project to lead (motivator) will!\n\n**Financial vs Non-Financial:**\n- Financial: Bonuses, commission, profit-sharing\n- Non-Financial: Flexible hours, recognition, training\n\nGoogle uses both - great pay (hygiene) PLUS free food, 20% creative time, and cool projects (motivators).\n\nWant real company examples or more detail on any theory?",
            followUp: "I can show you how Google, Netflix, or other companies motivate employees, or explain which methods work best. What interests you?"
        },
        
        example: {
            response: "Let's look at **Google** - they're motivation experts:\n\n**Financial Motivation:**\n- Top salaries (meets basic needs)\n- Bonuses based on performance\n- Stock options (employees become owners!)\n\n**Non-Financial Motivation:**\n- **Free gourmet food** - saves time, creates community\n- **20% time** - work on passion projects (Gmail was created this way!)\n- **Awesome offices** - slides, nap pods, games\n- **Learning** - unlimited training courses\n- **Recognition** - peer bonus system\n\n**Result:** \n- Low turnover (people don't leave)\n- High innovation (motivated people create new ideas)\n- Best talent wants to work there\n\nCompare this to a factory that only pays minimum wage and offers nothing else - workers do the bare minimum and leave for 50p more elsewhere.\n\nSee the difference? Want to explore how smaller businesses can motivate without Google's budget?",
            followUp: "I can explain budget-friendly motivation tactics, or we can jump to another topic. You choose!"
        }
    },

    leadership: {
        keywords: ['leadership', 'management', 'leadership styles', 'autocratic', 'democratic', 'laissez-faire', 'manager'],
        
        simple: {
            response: "Leadership is how managers lead their teams. There are different styles:\n\n- **Autocratic:** Boss makes all decisions (like a dictator)\n- **Democratic:** Team votes on decisions (like a democracy)\n- **Laissez-faire:** Team decides everything themselves (boss just supervises)\n\nDifferent situations need different styles!",
            followUp: "Want to know when to use each style, or see real examples of leaders?"
        },
        
        detailed: {
            response: "Let me break down leadership styles - this is really useful!\n\n**1. Autocratic (Authoritarian):**\n- Leader decides everything\n- No input from employees\n- **When to use:** Crisis situations, unskilled workers, quick decisions needed\n- **Example:** Army commander in battle\n- **Problem:** Workers feel undervalued, no creativity\n\n**2. Democratic (Participative):**\n- Team discusses and votes\n- Leader makes final decision but considers input\n- **When to use:** Complex problems, skilled workers, building morale\n- **Example:** Tech startup brainstorming\n- **Problem:** Slow decision-making\n\n**3. Laissez-faire (Hands-off):**\n- Team has full freedom\n- Leader just provides resources\n- **When to use:** Highly skilled experts, creative industries\n- **Example:** Research lab, design agency\n- **Problem:** Can lack direction if team isn't skilled\n\n**Real Insight:** Steve Jobs was autocratic (made all design decisions), but Google is democratic (engineers vote on features). Both successful, different approaches!\n\nThe best leaders switch between styles depending on the situation. Crisis? Be autocratic. Planning? Be democratic.\n\nWant real examples of each style in action?",
            followUp: "I can show you famous leaders and their styles, or explain situational leadership. What would help?"
        },
        
        example: {
            response: "Here are real leaders using different styles:\n\n**Autocratic - Gordon Ramsay (Hell's Kitchen):**\n- Makes all decisions about menu, plating, staff\n- Shouts orders, no discussion\n- **Why it works:** Kitchen chaos needs quick, clear leadership\n- **Result:** Michelin stars, but high staff turnover\n\n**Democratic - Satya Nadella (Microsoft CEO):**\n- Listens to engineers and managers\n- Encourages debate before decisions\n- Changed Microsoft's culture from autocratic to collaborative\n- **Result:** Stock price tripled, happier employees, more innovation\n\n**Laissez-faire - Valve Corporation (Gaming):**\n- No managers! Employees choose projects\n- Desks have wheels - move to any team\n- **Why it works:** All employees are expert game developers\n- **Result:** Created Half-Life, Portal, Steam - massive successes\n\n**The Lesson:** There's no \"best\" style - it depends on your industry, team skill level, and situation!\n\nWant to explore which style works best in different situations?",
            followUp: "I can explain when to switch leadership styles, or we can move to another business concept. You decide!"
        }
    }

    // Add more topics in the same conversational format...
};

// Context tracking for progressive conversation
let conversationContext = {
    currentTopic: null,
    detailLevel: 'simple', // simple, detailed, example
    previousTopics: []
};
