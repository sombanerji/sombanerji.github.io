// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-resume",
          title: "Resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-paper-accepted-at-emnlp-2024-main-quot-safety-arithmetic-a-framework-for-test-time-safety-alignment-of-language-models-by-steering-parameters-and-activations-quot",
          title: '🎉 Paper accepted at EMNLP 2024 Main! 🎯 &amp;quot;Safety Arithmetic: A Framework for...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-aaai-2025-ai-alignment-track-quot-safeinfer-context-adaptive-decoding-time-safety-alignment-for-large-language-models-quot",
          title: '🎉 Paper accepted at AAAI 2025 AI Alignment Track! 🎯 &amp;quot;SafeInfer: Context Adaptive...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-naacl-2025-main-quot-navigating-the-cultural-kaleidoscope-a-hitchhiker-39-s-guide-to-sensitivity-in-large-language-models-quot",
          title: '🎉 Paper accepted at NAACL 2025 Main! 🎯 &amp;quot;Navigating the Cultural Kaleidoscope: A...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-naacl-2025-industry-quot-breaking-boundaries-investigating-the-effects-of-model-editing-on-cross-linguistic-performance-quot",
          title: '🎉 Paper accepted at NAACL 2025 Industry! 🎯 &amp;quot;Breaking Boundaries: Investigating the Effects...',
          description: "",
          section: "News",},{id: "news-two-new-papers-are-out-quot-soteria-language-specific-functional-parameter-steering-for-multilingual-safety-alignment-quot-and-quot-memesense-an-adaptive-in-context-framework-for-social-commonsense-driven-meme-moderation-quot",
          title: '🎉 Two new papers are out! 🎯 &amp;quot;Soteria: Language-Specific Functional Parameter Steering for...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-emnlp-2025-quot-soteria-language-specific-functional-parameter-steering-for-multilingual-safety-alignment-quot",
          title: '🎉 Paper accepted at EMNLP 2025! 🎯 &amp;quot;Soteria: Language-Specific Functional Parameter Steering for...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-tmlr-2025-quot-memesense-an-adaptive-in-context-framework-for-social-commonsense-driven-meme-moderation-quot",
          title: '🎉 Paper accepted at TMLR 2025! 🎯 &amp;quot;MemeSense: An Adaptive In-Context Framework for...',
          description: "",
          section: "News",},{id: "news-i-am-pleased-to-share-that-i-have-received-an-invitation-from-nimhans-national-institute-of-mental-health-and-neurosciences-india-to-deliver-a-talk-on-responsible-ai-for-psychiatry-in-india-quot-quot-for-more-details-please-visit-heads-ai-quot",
          title: '📢 I am pleased to share that I have received an invitation from...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-aaai-2026-quot-aura-affordance-understanding-and-risk-aware-alignment-technique-for-large-language-models-quot",
          title: '🎉 Paper accepted at AAAI 2026! 🎯 &amp;quot;AURA: Affordance-Understanding and Risk-aware Alignment Technique...',
          description: "",
          section: "News",},{id: "news-two-new-papers-are-out-quot-attributional-safety-failures-in-large-language-models-under-code-mixed-perturbations-quot-with-microsoft-and-quot-prosocialalign-preference-conditioned-test-time-alignment-in-language-models-quot-with-tu-e",
          title: '🎉 Two new papers are out! 🎯 &amp;quot;Attributional Safety Failures in Large Language...',
          description: "",
          section: "News",},{id: "news-i-am-pleased-to-share-that-i-will-be-conducting-a-tutorial-at-aacl-ijcnlp-2025-in-mumbai-india-with-dr-rima-hazra-and-prof-animesh-mukherjee-titled-beyond-guardrails-advanced-safety-for-large-language-models-monolingual-multilingual-and-multimodal-frontiers-for-more-details-please-visit-aacl-ijcnlp-2025-tutorials-softminer-trace",
          title: '📢 I am pleased to share that I will be conducting a tutorial...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%6F%6D[%64%6F%74]%69%69%74%6B%67%70%63%73%65[%61%74]%67%6D%61%69%6C[%64%6F%74]%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/somnath-banerjee-6a798072", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=X5Zh5BwAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
