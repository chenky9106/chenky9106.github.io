const app = new Vue({
    el: '#app',
    data: {
        hoverPubId: -1,
        hoverPreId: -1,
        hoverConfId: -1,
        activityHover: false,
        talkHover: false,
        miscHover: false,
        years: [],
        selectedBiography: 'en',
        selectedYear: 'All',
        selectedTopic: "Featured",
        tags: ["site", "about", "biography", "news", "publications", "preprints", "honors", "competitions", "activities", "talks", "misc", "opening", "mentees"],
        selectedTag: 'site',
        selectedList: "ul",
        showSelected: false,
        numberOfSelected: 0,
        venueCounter: {}
    },
    created: function () {
        this.topics = [this.selectedTopic];
        for (publication of publications) {
            // default ``selected``
            publication.selected = false;
            // count publication years
            if (!this.years.includes(publication.year)) {
                this.years.push(publication.year);
            }
            // default ``topics`` if there is no assigned
            if (!publication.hasOwnProperty("topics")) {
                publication.topics = [];
            }
            // count all topics
            for (topic of publication.topics) {
                if (!this.topics.includes(topic)) {
                    this.topics.push(topic);
                }
            }
            // count all venues
            if (!publication.hasOwnProperty("abbr")) {
                var venue = publication.venue;
            }
            else {
                var venue = publication.abbr;
            };
            if (this.venueCounter.hasOwnProperty(venue)) {
                this.venueCounter[venue]++;
            }
            else {
                this.venueCounter[venue]=1;
            }
        }
        console.log("READY");
    },
    methods: {
        updateSelected() {
            var num = 0;
            for (publication of publications) {
                if (publication.selected) {
                    num++;
                }
            }
            this.numberOfSelected = num;
            this.$forceUpdate();
        },
        selectPublication(pid) {
            publications[pid].selected = !publications[pid].selected;
            this.updateSelected();
        },
    }
});