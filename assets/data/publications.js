const publications = [
    {
        title: '<a href="https://www.nature.com/articles/s41586-023-06184-4" target="_blank">Skilful Nowcasting of Extreme Precipitation with NowcastNet</a>',
        authors: ["Yuchen Zhang", "Mingsheng Long", "Kaiyuan Chen", "Lanxiang Xing", "Ronghua Jin", "Michael I. Jordan", "Jianmin Wang"],
        venue: "Nature 619 (7970), 526-532",
        abbr: "Nature",
        year: "2023",
        highlight: "High Light",
        highlightRank: 1,
        topics: ["AI4Weather", "Generative Modeling"],
        image: "assets/images/papers/nowcastnet.jpg",
        paperURL: "assets/papers/nowcastnet.pdf",
        note: "Google Scholar citations: 673 (Jun 2026)"
    },
    {
        title: '<a href="https://proceedings.mlr.press/v235/chen24o.html" target="_blank">CogDPM: Diffusion Probabilistic Models via Cognitive Predictive Coding</a>',
        authors: ["Kaiyuan Chen", "Xingzhuo Guo", "Yu Zhang", "Jianmin Wang", "Mingsheng Long"],
        venue: "International Conference on Machine Learning",
        abbr: "ICML",
        year: "2024",
        highlight: "High Light",
        highlightRank: 2,
        topics: ["Diffusion", "AI4Weather"],
        image: "assets/images/papers/cogdpm.jpg",
        paperURL: "assets/papers/cogdpm.pdf",
        note: "Google Scholar citations: 3 (Jun 2026)"
    },
    {
        title: '<a href="https://arxiv.org/abs/2504.13914" target="_blank">Seed1.5-Thinking: Advancing Superb Reasoning Models with Reinforcement Learning</a>',
        authors: ["ByteDance Seed", "Jiaze Chen", "Tiantian Fan", "Xin Liu", "Kaiyuan Chen", "et al"],
        venue: "arXiv preprint arXiv:2504.13914",
        abbr: "arXiv",
        year: "2025",
        highlight: "High Light",
        highlightRank: 3,
        topics: ["LLM", "Reasoning", "RL"],
        image: "assets/images/papers/seed15-thinking.jpg",
        paperURL: "assets/papers/seed15-thinking.pdf",
        note: "Google Scholar citations: 111 (Jun 2026)"
    },
    {
        title: '<a href="https://arxiv.org/abs/2506.13651" target="_blank">xbench: Tracking Agents Productivity Scaling with Profession-Aligned Real-World Evaluations</a>',
        authors: ["Kaiyuan Chen", "Yixin Ren", "Yang Liu", "Xiaobo Hu", "Haotong Tian", "et al"],
        venue: "arXiv preprint arXiv:2506.13651",
        abbr: "arXiv",
        year: "2025",
        highlight: "High Light",
        highlightRank: 4,
        topics: ["Agent", "Benchmark", "Scaling Laws"],
        image: "assets/images/papers/xbench.jpg",
        paperURL: "assets/papers/xbench.pdf",
        note: "Google Scholar citations: 89 (Jun 2026)"
    },
    {
        title: '<a href="https://arxiv.org/abs/2603.20633" target="_blank">Seed1.8 Model Card: Towards Generalized Real-World Agency</a>',
        authors: ["ByteDance Seed"],
        venue: "arXiv preprint arXiv:2603.20633",
        abbr: "arXiv",
        year: "2026",
        highlight: "High Light",
        highlightRank: 5,
        topics: ["Agent", "LLM", "Benchmark"],
        image: "assets/images/papers/seed18-model-card.jpg",
        paperURL: "assets/papers/seed18-model-card.pdf",
        note: "Google Scholar citations: 36 (Jun 2026)"
    },
    {
        title: '<a href="https://arxiv.org/abs/2601.06521" target="_blank">BabyVision: Visual Reasoning Beyond Language</a>',
        authors: ["Liang Chen", "Weichu Xie", "Yiyan Liang", "Hongfeng He", "Kaiyuan Chen", "et al"],
        venue: "arXiv preprint arXiv:2601.06521",
        abbr: "arXiv",
        year: "2026",
        topics: ["MLLM", "Visual Reasoning"],
        image: "assets/images/papers/babyvision.jpg",
        paperURL: "assets/papers/babyvision.pdf",
        note: "Google Scholar citations: 17 (Jun 2026)"
    },
    {
        title: '<a href="https://arxiv.org/abs/2603.07980" target="_blank">$OneMillion-Bench: How Far are Language Agents from Human Experts?</a>',
        authors: ["Qihang Yang", "Yikai Liu", "Jie Li", "Junjie Bai", "Hao Chen", "Kaiyuan Chen", "et al"],
        venue: "arXiv preprint arXiv:2603.07980",
        abbr: "arXiv",
        year: "2026",
        topics: ["Agent", "Benchmark"],
        image: "assets/images/papers/onemillion-bench.jpg",
        paperURL: "assets/papers/onemillion-bench.pdf",
        note: "Google Scholar citations: 5 (Jun 2026)"
    },
    {
        title: '<a href="https://arxiv.org/abs/2601.20613" target="_blank">AgentIF-OneDay: A Task-level Instruction-Following Benchmark for General AI Agents in Daily Scenarios</a>',
        authors: ["Kaiyuan Chen", "Qimin Wu", "Taiyu Hou", "Tianhao Tang", "Xueyu Hu", "et al"],
        venue: "arXiv preprint arXiv:2601.20613",
        abbr: "arXiv",
        year: "2026",
        topics: ["Agent", "Benchmark"],
        image: "assets/images/papers/agentif-oneday.jpg",
        paperURL: "assets/papers/agentif-oneday.pdf",
        note: "Google Scholar citations: 1 (Jun 2026)"
    },
    {
        title: '<a href="https://arxiv.org/abs/2511.11238" target="_blank">Virtual Width Networks</a>',
        authors: ["Baisheng Li", "Banggu Wu", "Bole Ma", "Bowen Xiao", "Kaiyuan Chen", "et al"],
        venue: "arXiv preprint arXiv:2511.11238",
        abbr: "arXiv",
        year: "2025",
        topics: ["LLM", "Scaling Laws"],
        image: "assets/images/papers/virtual-width-networks.jpg",
        paperURL: "assets/papers/virtual-width-networks.pdf",
        note: "Google Scholar citations: 2 (Jun 2026)"
    },
    {
        title: '<a href="https://arxiv.org/abs/2502.17262" target="_blank">Unveiling Downstream Performance Scaling of LLMs: A Clustering-Based Perspective</a>',
        authors: ["Chengyin Xu", "Kaiyuan Chen", "Xiao Li", "Ke Shen", "Chenggang Li"],
        venue: "arXiv preprint arXiv:2502.17262",
        abbr: "arXiv",
        year: "2025",
        topics: ["LLM", "Scaling Laws"],
        image: "assets/images/papers/llm-scaling-clustering.jpg",
        paperURL: "assets/papers/llm-scaling-clustering.pdf",
        note: "Google Scholar citations: 6 (Jun 2026)"
    }
];

const preprints = [
   
];
